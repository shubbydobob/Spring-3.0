package org.project.dto;

public class InquiryDTO {

	 private String inquiry;

	   public String getInquiry() {
	      return inquiry;
	   }

	   public void setInquiry(String inquiry) {
	      this.inquiry = inquiry;
	   }

	   @Override
	   public String toString() {
	      return "InquiryDto [inquiry=" + inquiry + "]";
	   }
	}
