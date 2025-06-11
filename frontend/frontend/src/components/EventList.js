import React, { useEffect, useState } from "react";
import { getEvents, deleteEvent } from '../services/EventService.js';

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const response = await getEvents();
    setEvents(response.data);
  };

  const handleDelete = async (id) => {
    await deleteEvent(id);
    loadEvents();
  };

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.location}
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
