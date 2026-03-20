package com.example.backend.service;

import com.example.backend.dto.RegisterRequestDTO;
import com.example.backend.dto.UserResponseDTO;

import java.util.List;

public interface UserService {
    UserResponseDTO register(RegisterRequestDTO request);
    UserResponseDTO login(String email, String password);
    List<UserResponseDTO> getUsersByRole(String role);
    void approveHandler(Long userId);
}
