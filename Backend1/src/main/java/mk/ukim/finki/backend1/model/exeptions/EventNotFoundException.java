package mk.ukim.finki.backend1.model.exeptions;

public class EventNotFoundException extends RuntimeException{
    public EventNotFoundException(Long id){
        super(String.format("Event with id: %d is not found",id));
    }
}
