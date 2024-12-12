package org.project.controller;

import java.util.HashMap;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.project.dto.MechanicSignupDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping ("/main")
public class MainController {
	
	
	@GetMapping("/main_guest")
	public String showMainGusetPage() {
		return "main/main_guest";
	}
	
	
	
	 @GetMapping("/main_worker")
	    public String showMechanicPage(HttpSession session, Model model) {
	        // 세션에서 로그인된 사용자 정보 가져오기
	        MechanicSignupDto loggedInMechanic = (MechanicSignupDto) session.getAttribute("loggedInMechanic");

	        // 사용자 로그인 여부 확인
	        if (loggedInMechanic != null) {
	            model.addAttribute("welcomeMessage", loggedInMechanic.getName() + "님 환영합니다");
	            model.addAttribute("isLoggedIn", true); // 로그인 상태 플래그
	        } else {
	            model.addAttribute("isLoggedIn", false); // 비로그인 상태
	        }

	        return "/main/main_worker"; // mechanicpage.jsp로 이동
	    }
	    
}