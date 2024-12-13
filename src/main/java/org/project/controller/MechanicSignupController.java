package org.project.controller;

import java.util.List;

import org.project.dto.MechanicSignupDto;
import org.project.service.MechanicSignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class MechanicSignupController {

    @Autowired
    private MechanicSignupService mechanicSignupService;

    // 회원등록 페이지 로드
    @GetMapping("/mechanicsign")
    public String showSignupPage() {
        return "login/mechanicsign"; // HTML 경로
    }

    // 모든 회원 데이터 조회
    @GetMapping("/signup")
    public String getAllMechanicSignups(Model model) {
        try {
            List<MechanicSignupDto> mechanicSignups = mechanicSignupService.getAllMechanicSignups();
            model.addAttribute("mechanicSignups", mechanicSignups);
            return "/login/mechanicsign"; // 데이터 전달 후 페이지 렌더링
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("error", "회원 데이터 조회 실패");
            return "/error"; // 오류 페이지
        }
    }

    // 회원등록 처리
    @PostMapping("/mechanicsign")
    public String handleSignup(@ModelAttribute MechanicSignupDto mechanicSignupDto, Model model) {
        try {
            mechanicSignupService.saveMechanicsignup(mechanicSignupDto);
            model.addAttribute("message", "회원등록이 성공적으로 완료되었습니다.");
            return "/main/main_worker"; // 성공 페이지
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("error", "회원등록 실패");
            return "/main/mechanicsign"; // 실패 페이지
        }
    }
}
