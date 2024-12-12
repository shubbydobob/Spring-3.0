package org.project.dto;

import java.sql.Date;

public class ReservationDTO {
	 
	   private int reservation_no;
	   private String customer_name;
	   private String customer_phone;
	   private String address_postcode;
	   private String address_road;
	   private String address_bname;
	   private String address_detail;
	   private String problem;
	   private String mechanic;
	   private Date reservation_date;
	   private String reservation_time;
	   
	   
	public int getReservation_no() {
		return reservation_no;
	}
	public void setReservation_no(int reservation_no) {
		this.reservation_no = reservation_no;
	}
	public String getCustomer_name() {
		return customer_name;
	}
	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}
	public String getCustomer_phone() {
		return customer_phone;
	}
	public void setCustomer_phone(String customer_phone) {
		this.customer_phone = customer_phone;
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
	public String getMechanic() {
		return mechanic;
	}
	public void setMechanic(String mechanic) {
		this.mechanic = mechanic;
	}
	public Date getReservation_date() {
		return reservation_date;
	}
	public void setReservation_date(Date reservation_date) {
		this.reservation_date = reservation_date;
	}
	public String getReservation_time() {
		return reservation_time;
	}
	public void setReservation_time(String reservation_time) {
		this.reservation_time = reservation_time;
	}
	@Override
	public String toString() {
		return "ReservationDTO [reservation_no=" + reservation_no + ", customer_name=" + customer_name
				+ ", customer_phone=" + customer_phone + ", address_postcode=" + address_postcode + ", address_road="
				+ address_road + ", address_bname=" + address_bname + ", address_detail=" + address_detail
				+ ", problem=" + problem + ", mechanic=" + mechanic + ", reservation_date=" + reservation_date
				+ ", reservation_time=" + reservation_time + "]";
	}
	   
	   
	   
	
}