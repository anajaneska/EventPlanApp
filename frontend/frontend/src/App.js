import React, { useState } from "react";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const toggleForm = (eventId = null) => {
    setEditingEventId(eventId);
    setShowForm(!showForm);
  };

  const handleSave = () => {
    setShowForm(false);
    setEditingEventId(null);
    setRefresh(!refresh);
  };

  return (
    <div className="app-container">
      <header className="header">
          Event Planner
        <button className="create-btn" onClick={() => toggleForm(null)}>+ Create Event</button>
      </header>

      {showForm && (
        <div className="modal-overlay">
          <EventForm eventId={editingEventId} onSave={handleSave} onClose={() => setShowForm(false)} />
        </div>
      )}

      <EventList onEdit={toggleForm} key={refresh} />
    </div>
  );
}

export default App;




