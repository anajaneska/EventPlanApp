package mk.ukim.finki.backend1.service;


import mk.ukim.finki.backend1.model.Event;

import java.util.List;
import java.util.Optional;

public interface EventService {
    List<Event> getAllEvents();
    Optional<Event> getEventById(Long id);
    Event createEvent(Event event);
    void deleteEvent(Long id);
    Event updateEvent(Long id, Event event);
}
