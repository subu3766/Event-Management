package com.eventmanagement.model;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Attendee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "attendees")
    private List<Event> events;
}
