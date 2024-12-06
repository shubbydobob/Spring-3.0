package org.project.service;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.project.dto.ReservationDTO;
import org.project.mapper.ReservationMapper;



@Service
public class ReservationService {

	 private final ReservationMapper reservationMapper;

	    @Autowired
	    public ReservationService(ReservationMapper reservationMapper) {
	        this.reservationMapper = reservationMapper;
	    }

	    public void saveReservation(ReservationDTO reservationDTO) {
	        reservationMapper.insertReservation(reservationDTO);
	    }
	    
	    public List<String> getAvailableTimesForDate(String date) {
	        // Mock example. Replace with actual database query.
	        return List.of("09:00", "10:00", "11:00", "12:00", "13:00", 
	        		"14:00", "15:00","16:00", "17:00", "18:00", "19:00");
	    }
}
