package com.eventmanagement.model;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String location;
    private Date date;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "event")
    private List<Task> tasks;

    @ManyToMany
    private List<Attendee> attendees;
}
