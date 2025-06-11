import React, { useState, useEffect } from "react";
import { createEvent, updateEvent, getEventById } from '../services/EventService.js';

export default function EventForm({ eventId, onSave }) {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    location: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    if (eventId) {
      getEventById(eventId).then((res) => {
        setEvent(res.data);
      });
    }
  }, [eventId]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (eventId) {
      await updateEvent(eventId, event);
    } else {
      await createEvent(event);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={event.title} onChange={handleChange} placeholder="Title" required />
      <input name="location" value={event.location} onChange={handleChange} placeholder="Location" required />
      <textarea name="description" value={event.description} onChange={handleChange} placeholder="Description" />
      <input name="startTime" value={event.startTime} onChange={handleChange} type="datetime-local" required />
      <input name="endTime" value={event.endTime} onChange={handleChange} type="datetime-local" required />
      <button type="submit">{eventId ? "Update" : "Create"} Event</button>
    </form>
  );
}
