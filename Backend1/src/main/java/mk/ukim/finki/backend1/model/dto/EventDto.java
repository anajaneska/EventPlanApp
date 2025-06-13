package mk.ukim.finki.backend1.model.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import mk.ukim.finki.backend1.model.enumerations.Status;

import java.time.LocalDateTime;

@Data
public class EventDto {
    private String title;
    private String description;
    private String location;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Status status;

    public EventDto() {
    }

    public EventDto(String title, String description, String location, LocalDateTime startTime, LocalDateTime endTime, Status status) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getLocation() {
        return location;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public Status getStatus() {
        return status;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
