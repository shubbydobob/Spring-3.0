package org.project.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.project.dto.ReviewDTO;

@Mapper
public interface ReviewMapper {
    void insertReview(ReviewDTO reviewDTO); // 문의 등록

    List<ReviewDTO> selectAllReviews(); // 모든 문의 조회

	/*
	 * InquiryDto selectInquiryById(int id); // 특정 문의 조회
	 * 
	 * void deleteInquiry(int id); // 문의 삭제
	 */}
