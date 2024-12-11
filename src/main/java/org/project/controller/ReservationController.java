package org.project.controller;

import java.text.SimpleDateFormat;
import java.util.List;

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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/reservation")
public class ReservationController {
	
	@Autowired
	   private ReservationService reservationService;
	 
	
	 @GetMapping("/")
	    public String showMainPage() {
	        return "main/main"; 
	    }
	 
	 @GetMapping("/reservation")
	    public String showReservationPage() {
	        return "reservation/reservation"; 
	    } 
	 
	 @PostMapping("/reservation_info_check")
	public String getReservationByCustomerInfo(ReservationDTO rdto, Model model){
		System.out.println(rdto);
			 
		List<ReservationDTO> reservations = reservationService.findReservationByCustomerInfo(rdto);
		
		model.addAttribute("reservations", reservations);
		
		return "reservation/reservation_info_check"; 
	}
	 
	 @GetMapping("/reservation_info_check")
	 public String submitReservationInfo() {
	     return "reservation/reservation_info_check";
	 }
	 
	 @GetMapping("/reservation_info")
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
	 
	 @GetMapping("/reservation_check")
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
public ResponseEntity getAvailableTimesForMechanic(@RequestParam String mechanic, @RequestParam String date) {
	  List<String> availableTimesForMechanic = reservationService.getAvailableTimesForMechanic(mechanic, date);
   // Call the service to get available times for the given date
	  System.out.println("Available times for mechanic : " + mechanic + " on " + date + ": " + availableTimesForMechanic);
	  System.out.println("aaaaaa");
   return ResponseEntity.ok(availableTimesForMechanic);
}


   
@PostMapping("/reservation_check")
public String makeReservation(@ModelAttribute ReservationDTO reservationDTO, RedirectAttributes redirectAttributes) {
	  
	  SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	    String formattedDate = dateFormat.format(reservationDTO.getReservation_date());
	  boolean isAvailable = reservationService.isTimeSlotAvailable(formattedDate, reservationDTO.getReservation_time());
   
   if (!isAvailable) {
       redirectAttributes.addFlashAttribute("errorMessage", "예약에 실패했습니다.");
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



  

 
}



