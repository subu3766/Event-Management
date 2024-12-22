package com.eventmanagement.service;

import com.eventmanagement.model.Attendee;
import com.eventmanagement.repository.AttendeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendeeService {
    @Autowired
    private AttendeeRepository attendeeRepository;

    public List<Attendee> getAllAttendees() {
        return attendeeRepository.findAll();
    }

    public Attendee createAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    public void deleteAttendee(Long id) {
        attendeeRepository.deleteById(id);
    }
}