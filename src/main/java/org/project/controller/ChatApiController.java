package org.project.controller;

import org.project.dto.ReviewDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ChatApiController {

	/*
	 * @PostMapping("/submit-inquiry") public ResponseEntity<String>
	 * submitInquiry(@RequestBody InquiryDto inquiryDto) { // 문의 데이터 처리 로직 //
	 * InquiryService.saveInquiry(inquiryDto); return
	 * ResponseEntity.ok("문의가 성공적으로 제출되었습니다."); }
	 */

    @PostMapping("/submit-review")
    public ResponseEntity<String> submitReview(@RequestBody ReviewDTO reviewDTO) {
        // 리뷰 데이터 처리 로직
        // ReviewService.saveReview(reviewDto);
        return ResponseEntity.ok("리뷰가 성공적으로 제출되었습니다.");
    }
}
