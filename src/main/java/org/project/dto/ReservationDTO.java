package org.project.dto;

import java.sql.Date;

public class ReservationDTO {
	  private int no;                   // 예약 번호
	    private String customer_name;      // 고객 이름
	    private String customer_phone;     // 고객 전화번호
	    private String address_postcode;   // 고객 주소 (우편번호)
	    private String address_road;       // 고객 주소 (도로명)
	    private String address_bname;      // 고객 주소 (번지)
	    private String address_detail;     // 고객 주소 (상세 주소)
	    private String problem;           // 고객이 요청한 문제
	    private Date date;                // 예약 날짜
	    private String time;              // 예약 시간
	    private int mechanic_id;           // 선택된 기사 ID
	    private MechanicDTO mechanic;     // 선택된 기사 정보
		public int getNo() {
			return no;
		}
		public void setNo(int no) {
			this.no = no;
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
		public Date getDate() {
			return date;
		}
		public void setDate(Date date) {
			this.date = date;
		}
		public String getTime() {
			return time;
		}
		public void setTime(String time) {
			this.time = time;
		}
		public int getMechanic_id() {
			return mechanic_id;
		}
		public void setMechanic_id(int mechanic_id) {
			this.mechanic_id = mechanic_id;
		}
		public MechanicDTO getMechanic() {
			return mechanic;
		}
		public void setMechanic(MechanicDTO mechanic) {
			this.mechanic = mechanic;
		}
		@Override
		public String toString() {
			return "ReservationDTO [no=" + no + ", customer_name=" + customer_name + ", customer_phone="
					+ customer_phone + ", address_postcode=" + address_postcode + ", address_road=" + address_road
					+ ", address_bname=" + address_bname + ", address_detail=" + address_detail + ", problem=" + problem
					+ ", date=" + date + ", time=" + time + ", mechanic_id=" + mechanic_id + ", mechanic=" + mechanic
					+ "]";
		}
	
	    
	    
	
}
