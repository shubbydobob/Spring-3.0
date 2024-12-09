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
	  System.out.println("reservation : " + "예약 실패" + reservation);
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
          System.out.println("reservation : " + reservation);
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
      System.out.println("reservation : " + reservations);
      return "reservation/reservation_check";  
  }
  
//  @PostMapping("/reservation_info_check")
//  public String confirmReservation(@ModelAttribute ReservationDTO reservation, RedirectAttributes redirectAttributes) {
//     
//      if (reservation.getCustomer_name() == null || reservation.getCustomer_phone() == null || 
//    		  reservation.getAddress_postcode() == null || reservation.getAddress_road() == null ||
//    		  reservation.getAddress_bname() == null || reservation.getAddress_detail() == null ||
//              reservation.getReservation_date() == null){
//          redirectAttributes.addFlashAttribute("errorMessage", "紐⑤뱺 �븘�뱶瑜� �엯�젰�빐二쇱꽭�슂.");
//          return "redirect:/reservation/reservation_info_check";
//      }
//
//    
//      reservationService.saveReservation(reservation);
//
//     
//      redirectAttributes.addFlashAttribute("successMessage", "�삁�빟�씠 �셿猷뚮릺�뿀�뒿�땲�떎!");
//      redirectAttributes.addFlashAttribute("confirmedReservation", reservation);
//
//      return "redirect:/reservation/reservation_check"; 
//  }
//  
  @GetMapping("/reservation_info_check")
  public String showReservationInfoPage(Model model) {
      // Add the necessary attributes to the model for displaying reservation info
      List<ReservationDTO> reservations = reservationService.getReservation();
      model.addAttribute("reservations", reservations);
      return "reservation/reservation_info_check";  // Corresponding JSP or HTML page
  }
}


