package org.project.dto;

public class InquiryDTO {
    // 클라이언트에서 보낸 필드 이름과 일치해야 함
    private String inquiry; // 문의 내용

    // Getter와 Setter
    public String getInquiry() {
        return inquiry;
    }

    public void setInquiry(String inquiry) {
        this.inquiry = inquiry;
    }

    @Override
    public String toString() {
        return "InquiryDTO{" +
                "inquiry='" + inquiry + '\'' +
                '}';
    }
}