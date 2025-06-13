package mk.ukim.finki.backend1.service.impl;


import mk.ukim.finki.backend1.model.Event;
import mk.ukim.finki.backend1.model.dto.EventDto;
import mk.ukim.finki.backend1.model.enumerations.Status;
import mk.ukim.finki.backend1.model.exeptions.EventNotFoundException;
import mk.ukim.finki.backend1.repository.EventRepository;
import mk.ukim.finki.backend1.service.EventService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {
    private final EventRepository eventRepository;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
    @Override
    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }
    @Override
    public Optional<Event> createEvent(String title, String description, String location, LocalDateTime startTime, LocalDateTime endTime) {
        Status calculatedStatus = calculateStatus(startTime, endTime);
        Event event = new Event(title,description,location,startTime,endTime,calculatedStatus);
        eventRepository.save(event);
        return Optional.of(event);
    }

    @Override
    public Optional<Event> createEvent(EventDto eventDto) {
        Status calculatedStatus = calculateStatus(eventDto.getStartTime(), eventDto.getEndTime());

        Event event = new Event(eventDto.getTitle(),eventDto.getDescription(),eventDto.getLocation(),eventDto.getStartTime(),eventDto.getEndTime(),calculatedStatus);
        eventRepository.save(event);
        return Optional.of(event);
    }

    @Override
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

    @Override
    public Optional<Event> updateEvent(Long id, String title, String description, String location, LocalDateTime startTime, LocalDateTime endTime) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new EventNotFoundException(id));
        Status calculatedStatus = calculateStatus(startTime, endTime);

        event.setTitle(title);
        event.setLocation(location);
        event.setStartTime(startTime);
        event.setEndTime(endTime);
        event.setDescription(location);
        event.setStatus(calculatedStatus);

        eventRepository.save(event);

        return Optional.of(event);
    }

    @Override
    public Optional<Event> updateEvent(Long id, EventDto eventDto) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new EventNotFoundException(id));
        Status calculatedStatus = calculateStatus(eventDto.getStartTime(), eventDto.getEndTime());

        event.setTitle(eventDto.getTitle());
        event.setLocation(eventDto.getLocation());
        event.setStartTime(eventDto.getStartTime());
        event.setEndTime(eventDto.getEndTime());
        event.setDescription(eventDto.getLocation());
        event.setStatus(calculatedStatus);

        eventRepository.save(event);
        return Optional.of(event);
    }

    @Override
    public void changeEventStatus(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new EventNotFoundException(id));

        event.setStatus(calculateStatus(event.getStartTime(),event.getEndTime()));
        this.eventRepository.save(event);
    }

    private Status calculateStatus(LocalDateTime startTime, LocalDateTime endTime) {
        LocalDateTime now = LocalDateTime.now();

        if (now.isBefore(startTime)) {
            return Status.COMING_UP;
        } else if (now.isAfter(endTime)) {
            return Status.PASSED;
        } else {
            return Status.ACTIVE;
        }
    }

}