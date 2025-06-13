import React, { useState, useEffect } from "react";
import { createEvent, updateEvent, getEventById } from '../services/EventService.js';
import './EventForm.css'; // You can extract form styles here if preferred

export default function EventForm({ event, onSave, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    if (event) {
      setFormData(event);
    } else {
      setFormData({
        title: "",
        description: "",
        location: "",
        startTime: "",
        endTime: "",
      });
    }
  }, [event]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (event && event.id) {
      await updateEvent(event.id, formData);
    } else {
      await createEvent(formData);
    }
    onSave();
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>{event ? "Edit Event" : "Create Event"}</h2>

      <label>Title</label>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" required />

      <label>Location</label>
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />

      <label>Description</label>
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />

      <label>Start Time</label>
      <input name="startTime" value={formData.startTime} onChange={handleChange} type="datetime-local" required />

      <label>End Time</label>
      <input name="endTime" value={formData.endTime} onChange={handleChange} type="datetime-local" required />

      <div className="form-buttons">
        <button type="submit">{event ? "Update" : "Create"}</button>
        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}
