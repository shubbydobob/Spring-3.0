package org.project.controller;

import java.util.List;

import org.project.dto.InquiryDTO;
import org.project.service.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/submit")
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;
    
    @GetMapping("/inquiries")
    public ResponseEntity<List<InquiryDTO>> getAllInquiries() {
        try {
            List<InquiryDTO> inquiries = inquiryService.getAllInquiries();
            return ResponseEntity.ok(inquiries);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    @PostMapping("/submit-inquiry")
    public ResponseEntity<String> handleInquiry(@RequestBody InquiryDTO inquiryDTO) {
    	System.out.println("aaaaaaaaaa");
    	System.out.println(inquiryDTO);
        try {
            inquiryService.saveInquiry(inquiryDTO);
            System.out.println("성공");
            return ResponseEntity.ok("문의가 성공적으로 제출되었습니다.");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("실패");
            return ResponseEntity.status(500).body("서버 에러: 문의 제출 실패");
        }
    }

}


