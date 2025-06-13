import React, { useState } from "react";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import './App.css';

function App() {
  const [editingId, setEditingId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setEditingId(null);
    setRefresh(!refresh);  // trigger refresh list
  };

  return (
    <div className="app-container"v>
      <header>Event Planner</header>
      <EventList key={refresh} />
      <EventForm eventId={editingId} onSave={handleSave} />
      
    </div>
  );
}

export default App;


