package org.project.service;

import java.util.List;

import org.project.dto.ReviewDTO;

public interface ReviewService {
    void saveReview(ReviewDTO reviewDTO);//기존 메서드
    List<ReviewDTO> getAllReviews();// 조회 메서드
}