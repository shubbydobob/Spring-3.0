package org.project.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.project.dto.MechanicSignupDto;

@Mapper
public interface MechanicSignupMapper {
    void insertMechanicSignup(MechanicSignupDto mechanicSignupDto);
    List<MechanicSignupDto> selectAllMechanicSignups();
    MechanicSignupDto selectMechanicByIdAndPassword(MechanicSignupDto msdto); // 추가
}