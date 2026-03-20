package com.example.backend.dto;

import com.example.backend.enums.AvailabilityStatus;

import java.time.LocalDateTime;

public class UpdatePlaceAvailabilityDTO {
    private Long placeId;
    private LocalDateTime eventDateTime;
    private AvailabilityStatus availabilityStatus;
}
