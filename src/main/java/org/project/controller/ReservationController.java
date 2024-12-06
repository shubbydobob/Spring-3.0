package org.project.controller;

import java.util.List;


import org.project.dto.MechanicDTO;
import org.project.dto.ReservationDTO;
import org.project.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
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
	 
	 

//	 @Autowired
//	    public ReservationController(ReservationService reservationService) {
//	        this.reservationService = reservationService;
//	    }
	 
	 @GetMapping("/reservation")
	    public String showReservationPage() {
	        return "reservation/reservation"; // JSP 파일 경로
	    }
  
  @GetMapping("/available-times")
  @ResponseBody
  public List<String> getAvailableTimes(@RequestParam String date) {
      // Call the service to get available times for the given date
      return reservationService.getAvailableTimesForDate(date);
  }

  // POST 요청 핸들러
  @PostMapping("/reservation")
  public String makeReservation(@ModelAttribute ReservationDTO reservation, Model model) {
      try {
          // 예약 정보 저장
          reservationService.saveReservation(reservation);

          // 성공 시 예약 확인 페이지로 리다이렉트
          return "redirect:/reservation/reservation-check";
      } catch (Exception e) {
          e.printStackTrace();
          model.addAttribute("error", "예약 처리 중 문제가 발생했습니다.");
          return "reservation/reservation-fail"; // 실패 시 폼으로 이동
      }
  }

  
  @GetMapping("/reservation-check")
  public String showReservationCheckPage(Model model) {
      // 예약 정보를 가져오는 서비스 호출
      List<ReservationDTO> reservations = reservationService.getAllReservationsWithMechanics(); // 예약과 기사 정보
      model.addAttribute("reservations", reservations);
      return "/reservation/reservation-check";  // reservation-check.jsp로 이동
  }
}
