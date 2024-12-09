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

	        //예약 가능한 날짜와 시간
		    public boolean isTimeSlotAvailable(String reservation_date, String reservation_time) {
		       
		        List<ReservationDTO> existingReservations = 
		       reservationMapper.findByReservationDateAndReservationTime(reservation_date, reservation_time);
		       return existingReservations.isEmpty(); 
		    }
		    public List<ReservationDTO> findReservationByCustomerInfo
		    (String customerName, String customerPhone, String address_postcode,
		     String address_road, String address_bname, String address_detail) {
		     return reservationMapper.findReservationByCustomerInfo(customerName, customerPhone, address_postcode,
		      address_road, address_bname, address_detail);
		    }   
		   
		    //예약 정보 기입

		    public void saveReservation(ReservationDTO reservationDTO) {
		        reservationMapper.insertReservation(reservationDTO);
		    }
		 
		    //수리 기사의 가능한 날짜 
		    public List<String> getAvailableTimesForMechanic(String mechanic, String date) {
		
		    	return reservationMapper.getAvailableTimesForMechanic(mechanic, date);
		    }
		  
		    
		   //기입한 정보를 조회
		    public List<ReservationDTO> getReservation() {
		        return reservationMapper.selectReservation();
		    }
		
		
		    public List<ReservationDTO> findByReservationDateAndReservationTime(String reservation_date, String reservation_time) {
		        return reservationMapper.findByReservationDateAndReservationTime(reservation_date, reservation_time);
		    }
		    

		  
	}
