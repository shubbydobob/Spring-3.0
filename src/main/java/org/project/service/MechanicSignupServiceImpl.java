package org.project.service;

import java.util.List;

import org.project.dto.MechanicSignupDto;
import org.project.mapper.MechanicSignupMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MechanicSignupServiceImpl implements MechanicSignupService {

    @Autowired
    private MechanicSignupMapper mechanicSignupMapper;

    @Override
    public void saveMechanicsignup(MechanicSignupDto mechanicSignupDto) {
        mechanicSignupMapper.insertMechanicSignup(mechanicSignupDto);
    }

    @Override
    public List<MechanicSignupDto> getAllMechanicSignups() {
        return mechanicSignupMapper.selectAllMechanicSignups();
    }

    @Override
    public MechanicSignupDto findMechanicByIdAndPassword(MechanicSignupDto msdto) {
    	System.out.println("msdto = " + msdto);
        return mechanicSignupMapper.selectMechanicByIdAndPassword(msdto); // 매퍼 호출
    }
}
