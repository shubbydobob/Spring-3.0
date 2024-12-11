package org.project.mapper;

import java.util.List;



import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.project.dto.ReservationDTO;

@Mapper
public interface ReservationMapper {

	ReservationDTO getReservationByNo(int reservation_no);
	 
	void insertReservation(ReservationDTO reservationDTO);
	
	
	List<ReservationDTO> selectReservation();
    

	List<ReservationDTO> findByReservationDateAndReservationTime(@Param("mechanic") String mechanic, @Param("reservation_date") String reservation_date, @Param("reservation_time") String reservation_time);


	List<String> getAvailableTimesForMechanic(@Param("mechanic") String mechanic, @Param("date") String date);
	
	
	List<ReservationDTO> findByReservation(String reservation_date, String reservation_time);
	
	List<ReservationDTO> findReservationByCustomerInfo(ReservationDTO rdto);
	  
	public List<String> getReservedTimes(@Param("mechanic") String mechanic, @Param("date") String date);  
	
	int cancelReservation(int reservation_no);
}
