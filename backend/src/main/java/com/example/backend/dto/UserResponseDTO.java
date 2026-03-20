package com.example.backend.dto;

import com.example.backend.enums.ApprovalStatus;
import com.example.backend.enums.Role;
import com.example.backend.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class UserResponseDTO {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private Role role;
    private String districtName; // Optional
    private ApprovalStatus approvalStatus; // Only HANDLER & PLACE_OWNER

    // Constructor that accepts a User
    public UserResponseDTO(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.role = user.getRole();
        this.approvalStatus = user.getApprovalStatus();
        this.districtName = user.getDistrict() != null ? user.getDistrict().getDistrictName() : null;
    }

}
