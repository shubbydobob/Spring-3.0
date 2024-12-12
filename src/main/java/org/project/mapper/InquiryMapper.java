package org.project.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.project.dto.InquiryDTO;

import java.util.List;

@Mapper
public interface InquiryMapper {
    void insertInquiry(InquiryDTO inquiryDTO); // 문의 등록

    List<InquiryDTO> selectAllInquiries(); // 모든 문의 조회

	/*
	 * InquiryDto selectInquiryById(int id); // 특정 문의 조회
	 * 
	 * void deleteInquiry(int id); // 문의 삭제
	 */}
