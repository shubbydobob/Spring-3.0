package org.project.service;

import java.util.List;
import org.project.dto.MechanicSignupDto;

public interface MechanicSignupService {
    void saveMechanicsignup(MechanicSignupDto mechanicSignupDto);
    List<MechanicSignupDto> getAllMechanicSignups();
    MechanicSignupDto findMechanicByIdAndPassword(String mechanicId, String mechanicPw); // 추가
}