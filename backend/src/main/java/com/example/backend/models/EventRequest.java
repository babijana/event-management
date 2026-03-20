package com.example.backend.models;

import com.example.backend.enums.RequestStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "EventRequest")
public class EventRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime eventDateTime;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RequestStatus requestStatus; // Includes CANCELLED and HANDLER_CANCEL_REQUESTED

    private String rejectionReason; // Admin or Handler reason

    @ManyToOne
    private User customer;

    @ManyToOne
    private User handler;

    @ManyToOne
    private EventType eventType;

    @ManyToOne
    private District district;

    @ManyToOne
    private Place priorityOne;

    @ManyToOne
    private Place priorityTwo;

    @ManyToOne
    private Place priorityThree;




}
