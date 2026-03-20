package com.example.backend.models;

import com.example.backend.enums.ApprovalStatus;
import com.example.backend.enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jdk.jfr.Enabled;
import lombok.Data;
import org.springframework.context.annotation.EnableLoadTimeWeaving;


@Entity
@Data
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @Email(message = "Invalid email format")
    @Column(unique = true)
    private String email;

    @Pattern(
            regexp = "^[0-9]{10}$",
            message = "Invalid Sri Lankan phone number"
    )
    @Column(nullable = false)
    private String phone;

    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Enumerated(EnumType.STRING)
    private ApprovalStatus approvalStatus;  // Only HANDLER & PLACE_OWNER

    @ManyToOne
    private District district; // Only HANDLER & PLACE_OWNER



}
