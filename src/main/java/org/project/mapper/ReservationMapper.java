package org.project.mapper;

import org.apache.ibatis.annotations.Mapper;

import org.project.dto.ReservationDTO;

@Mapper
public interface ReservationMapper {
//	@Insert("INSERT INTO reservation (name, phone, address_postcode, address_road, address_bname, address_detail, problem, reservation_date, reservation_time) " +
//            "VALUES (#{name}, #{phone}, #{addressPostcode}, #{addressRoad}, #{addressBname}, #{addressDetail}, #{problem}, #{reservationDate}, #{reservationTime})")
	void insertReservation(ReservationDTO reservationDTO);
}
