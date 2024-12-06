package org.project.controller;

import java.util.List;

import org.project.dto.ReservationDTO;
import org.project.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/reservation")
public class ReservationController {
	 @Autowired
	   private ReservationService reservationService;

//	 @Autowired
//	    public ReservationController(ReservationService reservationService) {
//	        this.reservationService = reservationService;
//	    }
	 
  @GetMapping
  public String showReservationPage() {
      return "reservation/reservation"; // The name of your JSP file
  }

  @GetMapping("/available-times")
  @ResponseBody
  public List<String> getAvailableTimes(@RequestParam String date) {
      // Call the service to get available times for the given date
      return reservationService.getAvailableTimesForDate(date);
  }

  @PostMapping
  public String submitReservation(@ModelAttribute ReservationDTO reservationDTO) {
      // Save to the database using the Service
      reservationService.saveReservation(reservationDTO);

      return "redirect:/reservation";// Redirect to a confirmation page or the same form
  }
}
