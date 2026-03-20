package com.example.backend.dto;

import java.time.LocalDateTime;

public class EventRequestResponseDTO {
    private Long id;
    private String customerName;
    private String handlerName;
    private String eventType;
    private String district;
    private LocalDateTime eventDateTime;
    private String requestStatus; // Can be CANCELLED or HANDLER_CANCEL_REQUESTED
    private String rejectionReason;
    private String placePriorityOne;
    private String placePriorityTwo;
    private String placePriorityThree;
}
