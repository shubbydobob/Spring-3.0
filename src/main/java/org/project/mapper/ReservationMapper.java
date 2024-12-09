package org.project.mapper;

import java.util.List;



import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.project.dto.ReservationDTO;

@Mapper
public interface ReservationMapper {

	//예약 정보 기입
	void insertReservation(ReservationDTO reservationDTO);
	
	//예약 정보 조회
	List<ReservationDTO> selectReservation();
    
	//예약 가능한 날짜와 시간
	List<ReservationDTO> findByReservationDateAndReservationTime(@Param("reservation_date") String reservation_date, @Param("reservation_time") String reservation_time);
	
	
	//예약 가능한 기사 시간.
	List<String> getAvailableTimesForMechanic(@Param("mechanic") String mechanic, @Param("date") String date);
	
	
	List<ReservationDTO> findByReservation(String reservation_date, String reservation_time);
	
	  List<ReservationDTO> findReservationByCustomerInfo(
		        @Param("customer_name") String customer_name,
		        @Param("customer_phone") String customer_phone,
		        @Param("address_postcode") String address_postcode,
		        @Param("address_road") String address_road,
		        @Param("address_bname") String address_bname,
		        @Param("address_detail") String address_detail
		    );
	
}
