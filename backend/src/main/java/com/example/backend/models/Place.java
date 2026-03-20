package com.example.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
@Table(name = "Place")
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private Integer capacity;

    @Column(nullable = false)
    private Double price;

    @Pattern(
            regexp = "^[0-9]{10}$",
            message = "Invalid Sri Lankan phone number"
    )
    @Column(nullable = false)
    private String contactNumber;

    @ManyToOne
    private District district;

    @ManyToOne
    private User owner;  // Place Owner

}
