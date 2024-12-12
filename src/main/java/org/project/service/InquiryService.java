package org.project.service;

import java.util.List;

import org.project.dto.InquiryDTO;

public interface InquiryService {
    void saveInquiry(InquiryDTO inquiryDTO);//기존 메서드
    List<InquiryDTO> getAllInquiries(); // 조회 메서드
}