package org.project.controller;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.project.dto.ReservationDTO;
import org.project.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/reservation")
public class ReservationController {
	
	@Autowired
	   private ReservationService reservationService;
	 // ReservationService를 자동 주입하여, 컨트롤러가 서비스 계층의 비즈니스 로직을
	 // 사용할 수 있게 한다.
	
	 @GetMapping("/") // 메인 페이지로 이동
	    public String showMainPage() {
	        return "main/main"; 
	    }
	 
	 @GetMapping("/reservation") //예약 페이지로 이동
	    public String showReservationPage() {
	        return "reservation/reservation"; 
	    } 
	 
	 @PostMapping("/reservation_info_check")  //예약자의 이름과 번호를 입력하여 예약 정보를 조회
	public String getReservationByCustomerInfo(ReservationDTO rdto, Model model){
		System.out.println(rdto);
			 
		List<ReservationDTO> reservations = reservationService.findReservationByCustomerInfo(rdto);
		
		model.addAttribute("reservations", reservations);
		
		return "reservation/reservation_info_check"; 
	}
	 
	 @GetMapping("/reservation_info_check") //reservation_info_check 페이지로 이동
	 public String submitReservationInfo() {
	     return "reservation/reservation_info_check";
	 }
	 
	 @GetMapping("/reservation_info") // 예약 번호를 이용하여 예약 정보 출력
	 public String showReservationInfoPage(@RequestParam("reservation_no") int reservation_no, Model model) {
	     ReservationDTO reservation = reservationService.getReservationByNo(reservation_no);
	     model.addAttribute("reservation", reservation);

	     System.out.println("reservation_no :" + reservation_no);
	     if (reservation != null) {
	         return "reservation/reservation_info"; 
	     } else {
	         return "redirect:/reservation/";
	         
	     }
	     
	 }
	 
	 @GetMapping("/reservation_check") //-> reservation_check 경로로 GET 요청이 들어오면, 전체 예약 목록을 조회,
	                                   //  : 예약 확인 페이지(reservation_check)를 반환한다.
	  public String showReservationCheckPage(Model model) {
	      
	      if (model.containsAttribute("reservation")) {
	          model.addAttribute("reservation", model.asMap().get("reservation"));
	      } else {
	          
	          model.addAttribute("reservation", new ReservationDTO());
	      }

	     
	      List<ReservationDTO> reservations = reservationService.getReservation();
	      model.addAttribute("reservations", reservations);
	      
	      return "reservation/reservation_check";  
	  }

	 
	
	 
	 @GetMapping("/available-times")
	 @ResponseBody
	 public ResponseEntity<Map<String, List<String>>> getAvailableTimesForMechanic(
	         @RequestParam String mechanic, @RequestParam String date) {
	     
	     // Fetch available times and reserved times from the service
	     List<String> availableTimesForMechanic = reservationService.getAvailableTimesForMechanic(mechanic, date);
	     List<String> reservedTimes = reservationService.getReservedTimes(mechanic, date);
	     
	     // Log for debugging
	     System.out.println("Available times for mechanic: " + mechanic + " on " + date + ": " + availableTimesForMechanic);
	     System.out.println("Reserved times: " + reservedTimes);
	     
	     // Create a response map containing both available and reserved times
	     Map<String, List<String>> response = new HashMap<>();
	     response.put("availableTimes", availableTimesForMechanic);
	     response.put("reservedTimes", reservedTimes);
	     
	     // Return the response as a JSON object
	     return ResponseEntity.ok(response);
	 }

	 

   
@PostMapping("/reservation_check")
public String makeReservation(@ModelAttribute ReservationDTO reservationDTO, RedirectAttributes redirectAttributes) {
	  
	  SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	    String formattedDate = dateFormat.format(reservationDTO.getReservation_date());
	    String mechanic = reservationDTO.getMechanic();
	  boolean isAvailable = reservationService.isTimeSlotAvailable(mechanic, formattedDate, reservationDTO.getReservation_time());
   
   if (!isAvailable) {
       redirectAttributes.addFlashAttribute("errorMessage", "이미 예약된 시간입니다. 다른 시간을 선택해주세요.");
       System.out.println("aaaaaaa");
       System.out.println("예약 실패 : " + reservationDTO);
       return "redirect:/reservation/reservation"; 
   }    
	  
	  reservationService.saveReservation(reservationDTO);
       System.out.println("aaaaaaa");
       System.out.println("예약 성공 : " + reservationDTO);
       redirectAttributes.addFlashAttribute("successMessage", "예약이 완료되었습니다!");
       redirectAttributes.addFlashAttribute("reservation", reservationDTO);
      
       return "redirect:/reservation/reservation_check";
   }



@PostMapping("/reservation_cancel")
public ModelAndView cancelReservation(@RequestParam("reservation_no") int reservation_no) {
    boolean isCanceled = reservationService.cancelReservation(reservation_no);

    ModelAndView modelAndView = new ModelAndView("redirect:/reservation/reservation");
    if (isCanceled) {
        modelAndView.addObject("successMessage", "예약이 성공적으로 취소되었습니다.");
    } else {
        modelAndView.addObject("errorMessage", "예약 취소에 실패하였습니다.");
    }
    return modelAndView;
}

 
}



