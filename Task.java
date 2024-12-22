package main.java.com.eventmanagement.model;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Date deadline;
    private String status;

    @ManyToOne
    private Event event;

    @ManyToOne
    private Attendee assignedAttendee;
}
