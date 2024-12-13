package org.project.service;

import java.util.List;
import org.project.dto.MechanicSignupDto;

public interface MechanicSignupService {
    void saveMechanicsignup(MechanicSignupDto mechanicSignupDto);
    List<MechanicSignupDto> getAllMechanicSignups();
    MechanicSignupDto findMechanicByIdAndPassword(MechanicSignupDto mechanicSignupDto); // 추가
}