package org.project.dto;

public class ReservationDTO {
	private String name;
    private String phone;
    private String address_postcode;
    private String address_road;
    private String address_bname;
    private String address_detail;
    private String problem;
    private String date;  // For selected date
    private String time;  // For selected time
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
	public String getAddress_postcode() {
		return address_postcode;
	}
	public void setAddress_postcode(String address_postcode) {
		this.address_postcode = address_postcode;
	}
	public String getAddress_road() {
		return address_road;
	}
	public void setAddress_road(String address_road) {
		this.address_road = address_road;
	}
	public String getAddress_bname() {
		return address_bname;
	}
	public void setAddress_bname(String address_bname) {
		this.address_bname = address_bname;
	}
	public String getAddress_detail() {
		return address_detail;
	}
	public void setAddress_detail(String address_detail) {
		this.address_detail = address_detail;
	}
	public String getProblem() {
		return problem;
	}
	public void setProblem(String problem) {
		this.problem = problem;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	@Override
	public String toString() {
		return "ReservationDTO [name=" + name + ", phone=" + phone + ", address_postcode=" + address_postcode
				+ ", address_road=" + address_road + ", address_bname=" + address_bname + ", address_detail="
				+ address_detail + ", problem=" + problem + ", date=" + date + ", time=" + time + "]";
	}
    
	
}
