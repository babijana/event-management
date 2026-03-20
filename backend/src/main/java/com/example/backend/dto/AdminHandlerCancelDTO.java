package com.example.backend.dto;

public class AdminHandlerCancelDTO {
    private Long requestId;
    private boolean approve;      // true = cancel approved, false = cancel rejected
    private String rejectionReason;
}
