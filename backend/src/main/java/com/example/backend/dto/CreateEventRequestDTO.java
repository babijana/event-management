package com.example.backend.dto;

import java.time.LocalDateTime;

public class CreateEventRequestDTO {
    private Long eventTypeId;
    private Long districtId;
    private LocalDateTime eventDateTime;

    private Long priorityOneId;
    private Long priorityTwoId;
    private Long priorityThreeId;
}
