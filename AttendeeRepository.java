package main.java.com.eventmanagement.repository;

import com.eventmanagement.model.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {}
