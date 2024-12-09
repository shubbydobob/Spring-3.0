package org.project.mapper;

import java.util.List;



import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.project.dto.ReservationDTO;

@Mapper
public interface ReservationMapper {

	void insertReservation(ReservationDTO reservationDTO);
	
List<ReservationDTO> findByReservationDateAndReservationTime(@Param("reservation_date") String reservation_date, @Param("reservation_time") String reservation_time);
	
	List<String> getAvailableTimesForMechanic(@Param("mechanic") String mechanic, @Param("date") String date);
	
	 List<ReservationDTO> selectReservation();
	 
	
	    ReservationDTO selectReservationByCustomerInfo(@Param("customer_name") String customer_name,
	                                                   @Param("customer_phone") String customer_phone,
	                                                   @Param("address_postcode") String address_postcode,
	                                                   @Param("address_road") String address_road,
	                                                   @Param("address_bname") String address_bname,
	                                                   @Param("address_detail") String address_detail,
	                                                   @Param("reservation_date") String reservation_date);
}
