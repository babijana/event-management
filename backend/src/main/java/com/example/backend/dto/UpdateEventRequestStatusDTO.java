package com.example.backend.dto;

import com.example.backend.enums.RequestStatus;

public class UpdateEventRequestStatusDTO {
    private Long requestId;
    private RequestStatus requestStatus;   // HANDLER_CANCEL_REQUESTED, CANCELLED, etc.
    private String rejectionReason;
}
