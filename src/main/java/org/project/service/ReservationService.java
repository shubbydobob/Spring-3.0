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
		       
		        List<ReservationDTO> existingReservations = reservationMapper.findByReservationDateAndReservationTime(reservation_date, reservation_time);
		        return existingReservations.isEmpty(); 
		    }
		    
		    public void saveReservation(ReservationDTO reservationDTO) {
		        reservationMapper.insertReservation(reservationDTO);
		    }
		    
		    
		    public List<String> getAvailableTimesForMechanic(String mechanic, String date) {
		
		    	return reservationMapper.getAvailableTimesForMechanic(mechanic, date);
		    }
		  
		    public List<ReservationDTO> getReservation() {
		        return reservationMapper.selectReservation();
		    }
		    
		  
		    public ReservationDTO getReservationByCustomerInfo
		    (String customer_name, String customer_phone, 
		     String address_postcode, String address_road, 
		     String address_bname, String address_detail, String reservation_date) {
		        return reservationMapper.selectReservationByCustomerInfo
		     (customer_name, customer_phone, address_postcode, address_road, address_bname, address_detail, reservation_date);
		    }
	}
