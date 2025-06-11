import React, { useEffect, useState } from 'react';
import { getEvents, deleteEvent } from '../services/eventService';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    getEvents().then(res => setEvents(res.data));
  };

  const handleDelete = (id) => {
    deleteEvent(id).then(loadEvents);
  };

  return (
    <div>
      <h2>Сите настани</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> – {event.location}
            <button onClick={() => handleDelete(event.id)}>Избриши</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
