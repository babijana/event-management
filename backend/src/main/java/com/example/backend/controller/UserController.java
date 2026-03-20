package com.example.backend.controller;

import com.example.backend.dto.LoginRequestDTO;
import com.example.backend.dto.RegisterRequestDTO;
import com.example.backend.dto.UserResponseDTO;
import com.example.backend.models.User;
import com.example.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public UserResponseDTO register(@RequestBody RegisterRequestDTO request){
        return userService.register(request);
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponseDTO> login(@RequestBody LoginRequestDTO request) {
        UserResponseDTO dto = userService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(dto);
    }


    @GetMapping("/role/{role}")
    public List<UserResponseDTO> getUsersByRole(@PathVariable String role){
        return userService.getUsersByRole(role);
    }

    @PostMapping("/approve/{id}")
    public void approveHandler(@PathVariable Long id){
        userService.approveHandler(id);
    }
}
