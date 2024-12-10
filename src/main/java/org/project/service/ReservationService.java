package org.project.service;

import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

import javax.sql.DataSource;

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

        
	    public boolean isTimeSlotAvailable(String reservation_date, String reservation_time) {
	       
	        List<ReservationDTO> existingReservations = 
	       reservationMapper.findByReservationDateAndReservationTime(reservation_date, reservation_time);
	       return existingReservations.isEmpty(); 
	    }
	    
	    public List<ReservationDTO> findReservationByCustomerInfo(ReservationDTO rdto) {
	     return reservationMapper.findReservationByCustomerInfo(rdto);
	    }   
	   
	

	    public void saveReservation(ReservationDTO reservationDTO) {
	        reservationMapper.insertReservation(reservationDTO);
	    }
	    
	    
	    public List<String> getAvailableTimesForMechanic(String mechanic, String date) {
	
	    	return reservationMapper.getAvailableTimesForMechanic(mechanic, date);
	    }
	    public List<ReservationDTO> findByReservationDateAndReservationTime(String reservation_date, String reservation_time) {
	        return reservationMapper.findByReservationDateAndReservationTime(reservation_date, reservation_time);
	    }
	    
	    
	  
	    public List<ReservationDTO> getReservation() {
	        return reservationMapper.selectReservation();
	    }
	
	    public ReservationDTO getReservationByNo(int reservation_no) {
	        return reservationMapper.getReservationByNo(reservation_no);
	    }
	   
		  
	}
