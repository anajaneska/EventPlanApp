package mk.ukim.finki.backend1.web;


import mk.ukim.finki.backend1.model.Event;
import mk.ukim.finki.backend1.model.dto.EventDto;
import mk.ukim.finki.backend1.service.EventService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "*")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEvent(@PathVariable Long id) {
        return this.eventService.getEventById(id)
                .map(event -> ResponseEntity.ok().body(event))
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Event> createEvent(@RequestBody EventDto eventDto) {
        return this.eventService.createEvent(eventDto)
                .map(event -> ResponseEntity.ok().body(event))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody EventDto eventDto) {
        return this.eventService.updateEvent(id,eventDto)
                .map(event -> ResponseEntity.ok().body(event))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteEvent(@PathVariable Long id) {
        this.eventService.deleteEvent(id);
        if(this.eventService.getEventById(id).isEmpty())
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
}

