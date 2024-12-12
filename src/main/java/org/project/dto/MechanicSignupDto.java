package org.project.dto;

import java.time.LocalDateTime;

public class MechanicSignupDto {
    private String mechanicId; // PK
    private String mechanicPw; // 비밀번호
    private String name; // 이름
    private String phoneNumber; // 휴대폰 번호
    private LocalDateTime createdAt; // 생성 시간

    // Getter와 Setter
    public String getMechanicId() {
        return mechanicId;
    }

    public void setMechanicId(String mechanicId) {
        this.mechanicId = mechanicId;
    }

    public String getMechanicPw() {
        return mechanicPw;
    }

    public void setMechanicPw(String mechanicPw) {
        this.mechanicPw = mechanicPw;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "MechanicSignupDto{" +
                "mechanicId='" + mechanicId + '\'' +
                ", mechanicPw='" + mechanicPw + '\'' +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
