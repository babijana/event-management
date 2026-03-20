package com.example.backend.service.impl;

import com.example.backend.dto.RegisterRequestDTO;
import com.example.backend.dto.UserResponseDTO;
import com.example.backend.enums.ApprovalStatus;
import com.example.backend.enums.Role;
import com.example.backend.models.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserResponseDTO register(RegisterRequestDTO request) {
        User  user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(request.getPassword());
        user.setRole(request.getRole());
        user.setApprovalStatus(ApprovalStatus.PENDING);
        userRepository.save(user);

        return new UserResponseDTO(user);
    }

    @Override
    public UserResponseDTO login(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(()->new RuntimeException("User not found"));
        if(!user.getPassword().equals(password)){
            throw new RuntimeException("Wrong password");
        }
        return new UserResponseDTO(user);
    }

    @Override
    public List<UserResponseDTO> getUsersByRole(String role) {
        return userRepository.findByRole(Role.valueOf(role))
                .stream()
                .map(UserResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public void approveHandler(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()->new RuntimeException("User not found"));
        user.setApprovalStatus(ApprovalStatus.APPROVED);
        userRepository.save(user);

    }
}
