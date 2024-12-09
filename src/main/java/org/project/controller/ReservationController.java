package org.project.controller;

import java.text.SimpleDateFormat;
import java.util.List;

import org.project.dto.ReservationDTO;
import org.project.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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
	        return "main/main"; // main.jsp 寃쎈줈
	    }
	 
	 @GetMapping("/reservation_info_check")
	  public String getReservationByCustomerInfo(
	          @RequestParam(value = "customer_name", required = false) String customer_name,
	          @RequestParam(value = "customer_phone", required = false) String customer_phone,
	          @RequestParam(value = "address_postcode", required = false) String address_postcode,
	          @RequestParam(value = "address_road", required = false) String address_road,
	          @RequestParam(value = "address_bname", required = false) String address_bname,
	          @RequestParam(value = "address_detail", required = false) String address_detail,
	          Model model){
		  System.out.println("customer_name: " + customer_name);
		  System.out.println("customer_phone: " + customer_phone);
		  // 고객 정보로 예약을 조회
	        List<ReservationDTO> reservations = reservationService.findReservationByCustomerInfo(
	                customer_name, customer_phone, address_postcode,
	                address_road, address_bname, address_detail);

	        // 예약 정보를 model에 추가해서 예약 정보 페이지로 전달
	        model.addAttribute("reservations", reservations);

	        return "reservation/reservation_info_check"; // 예약 정보 페이지로 이동
	    }
	 
	 @PostMapping("/reservation_info_check")
	 public String submitReservationInfo(
	         @RequestParam(value = "customer_name", required = false) String customer_name,
	         @RequestParam(value = "customer_phone", required = false) String customer_phone,
	         @RequestParam(value = "address_postcode", required = false) String address_postcode,
	         @RequestParam(value = "address_road", required = false) String address_road,
	         @RequestParam(value = "address_bname", required = false) String address_bname,
	         @RequestParam(value = "address_detail", required = false) String address_detail,
	         RedirectAttributes redirectAttributes) {

	     // Print out the submitted data for debugging
	     System.out.println("customer_name: " + customer_name);
	     System.out.println("customer_phone: " + customer_phone);
	     
	     // Retrieve reservation information based on the provided customer details
	     List<ReservationDTO> reservations = reservationService.findReservationByCustomerInfo(
	             customer_name, customer_phone, address_postcode,
	             address_road, address_bname, address_detail);

	     // Add the reservation data to the model (using RedirectAttributes to persist data across redirects)
	     redirectAttributes.addFlashAttribute("reservations", reservations);

	     // Redirect to reservation info check page
	     return "redirect:/reservation/reservation_info_check";
	 }
	 
	 @GetMapping("/reservation")
	    public String showReservationPage() {
	        return "reservation/reservation"; 
	    } 
	 
  @GetMapping("/available-times")
  @ResponseBody
  public ResponseEntity getAvailableTimesForMechanic(@RequestParam String mechanic, @RequestParam String date) {
	  List<String> availableTimesForMechanic = reservationService.getAvailableTimesForMechanic(mechanic, date);
      // Call the service to get available times for the given date
      return ResponseEntity.ok(availableTimesForMechanic);
  }

  
      
  @PostMapping("/reservation_check")
  public String makeReservation(ReservationDTO reservation, RedirectAttributes redirectAttributes) {
	  
	  SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	    String formattedDate = dateFormat.format(reservation.getReservation_date());
	  boolean isAvailable = reservationService.isTimeSlotAvailable(formattedDate, reservation.getReservation_time());
      
      if (!isAvailable) {
          redirectAttributes.addFlashAttribute("errorMessage", "예약 실패했습니다..");
          return "redirect:/reservation/reservation"; 
      }    
	  
	  reservationService.saveReservation(reservation);

          redirectAttributes.addFlashAttribute("successMessage", "예약 신청이 되었습니다!");
          redirectAttributes.addFlashAttribute("reservation", reservation);
         
          return "redirect:/reservation/reservation_check";
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
  

 
}



