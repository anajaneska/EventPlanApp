package mk.ukim.finki.backend1.repository;


import mk.ukim.finki.backend1.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
