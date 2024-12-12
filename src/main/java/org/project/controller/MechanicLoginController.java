package org.project.controller;

import org.project.dto.MechanicSignupDto;
import org.project.service.MechanicSignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@Controller
public class MechanicLoginController {

    @Autowired
    private MechanicSignupService mechanicSignupService;

    // 로그인 페이지 이동
    @GetMapping("/mechaniclogin")
    public String moveLoginPage() {
        return "/login/mechaniclogin"; // mechaniclogin.jsp로 이동
    }

    // 로그인 검증
    @PostMapping("/mechaniclogin")
    public String login(String username, String password, Model model, HttpSession session) {
        // Service를 통해 로그인 검증
        MechanicSignupDto mechanic = mechanicSignupService.findMechanicByIdAndPassword(username, password);

        if (mechanic != null) {
            // 로그인 성공 -> 세션에 사용자 정보 저장
            session.setAttribute("loggedInMechanic", mechanic);
            System.out.println("aaaaa");
            return "redirect:/main/main_worker"; // 대시보드 페이지로 리다이렉트
        } else {
            // 로그인 실패 -> 에러 메시지와 함께 로그인 페이지로 반환
            model.addAttribute("error", "아이디 또는 비밀번호가 일치하지 않습니다.");
            return "/login/mechaniclogin";
        }
    }
}
