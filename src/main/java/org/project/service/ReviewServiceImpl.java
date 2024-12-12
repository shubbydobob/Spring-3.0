package org.project.service;

import java.util.List;

import org.project.dto.ReviewDTO;
import org.project.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewMapper reviewMapper;

    @Override
    public void saveReview(ReviewDTO reviewDTO) {
        reviewMapper.insertReview(reviewDTO); // MyBatis 매퍼를 통해 데이터베이스에 저장
        System.out.println("리뷰 저장: " + reviewDTO);
    }

    @Override
    public List<ReviewDTO> getAllReviews() {
        return reviewMapper.selectAllReviews(); // 데이터베이스에서 모든 리뷰 조회
    }
}

