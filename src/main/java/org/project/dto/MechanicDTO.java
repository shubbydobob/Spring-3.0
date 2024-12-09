package org.project.dto;

import java.sql.Timestamp;

public class MechanicDTO {

	private int no;
    private String name;
    private String phone;
    private String expertise;
    
    
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getExpertise() {
		return expertise;
	}
	public void setExpertise(String expertise) {
		this.expertise = expertise;
	}

	@Override
	public String toString() {
		return "MechanicDTO [no=" + no + ", name=" + name + ", phone=" + phone + ", expertise=" + expertise + "]";
	}
	
	
    
}
