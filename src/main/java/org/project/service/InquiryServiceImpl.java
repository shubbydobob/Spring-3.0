package org.project.service;

import java.util.List;

import org.project.dto.InquiryDTO;
import org.project.mapper.InquiryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InquiryServiceImpl implements InquiryService {
	 @Autowired
	    private InquiryMapper inquiryMapper;
    @Override
    public void saveInquiry(InquiryDTO inquiryDTO) {
    	  inquiryMapper.insertInquiry(inquiryDTO);
        // 실제 저장 로직 구현
        System.out.println("Inquiry saved: " + inquiryDTO.getInquiry());
    }
    @Override
    public List<InquiryDTO> getAllInquiries() {
        return inquiryMapper.selectAllInquiries();
    }
}
