package com.example.backend.enums;

public enum RequestStatus {
    PENDING,            // Customer submitted, waiting admin
    ASSIGNED,           // Admin assigned handler
    HANDLER_APPROVED,   // Handler accepted
    HANDLER_REJECTED,
    HANDLER_CANCEL_REQUESTED, // Handler requested cancellation// Handler rejected
    ADMIN_APPROVED,     // Admin approved final
    ADMIN_REJECTED,     // Admin rejected final
    COMPLETED,          // Event completed successfully
    CANCELLED           // Admin approved cancellation by customer or handlergive
}
