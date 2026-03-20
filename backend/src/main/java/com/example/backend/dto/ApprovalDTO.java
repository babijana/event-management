package com.example.backend.dto;

import com.example.backend.enums.ApprovalStatus;

public class ApprovalDTO {
    private Long userId;
    private ApprovalStatus approvalStatus; // APPROVED / REJECTED
}
