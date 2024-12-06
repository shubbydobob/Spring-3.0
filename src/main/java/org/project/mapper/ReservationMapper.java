package org.project.mapper;

import java.util.List;



import org.apache.ibatis.annotations.Mapper;
import org.project.dto.ReservationDTO;

@Mapper
public interface ReservationMapper {

	void insertReservation(ReservationDTO reservationDTO);
	
	 List<ReservationDTO> selectAllReservationsWithMechanics();
}
