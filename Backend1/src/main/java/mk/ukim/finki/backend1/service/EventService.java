package mk.ukim.finki.backend1.service;


import mk.ukim.finki.backend1.model.Event;
import mk.ukim.finki.backend1.model.dto.EventDto;
import mk.ukim.finki.backend1.model.enumerations.Status;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface EventService {
    List<Event> getAllEvents();
    Optional<Event> getEventById(Long id);
    Optional<Event> createEvent(String title, String description, String location,
                                LocalDateTime startTime, LocalDateTime endTime);
    Optional<Event> createEvent(EventDto eventDto);
    void deleteEvent(Long id);
    Optional<Event> updateEvent(Long id, String title, String description, String location,
                                LocalDateTime startTime, LocalDateTime endTime);
    Optional<Event> updateEvent(Long id, EventDto eventDto);
    void changeEventStatus(Long id);
}
