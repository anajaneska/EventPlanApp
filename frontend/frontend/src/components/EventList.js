import React, { useEffect, useState } from "react";
import { getEvents, deleteEvent } from '../services/EventService.js';
import { EventCard } from './EventCard';
import EventForm from './EventForm'; // Form that handles both add & edit

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleEdit = (event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setEditingEvent(null);
    setShowForm(false);
    loadEvents(); // refresh list
  };

  return (
    <div>
      {showForm && (
  <EventForm
    event={editingEvent} // Safely access ID
    onSave={handleFormClose}    // This fixes the onSave error
    onClose={handleFormClose}
  />
)}

      <div className="card-container">
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}