import React, { useState } from "react";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";

function App() {
  const [editingId, setEditingId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setEditingId(null);
    setRefresh(!refresh);  // trigger refresh list
  };

  return (
    <div>
      <h1>Event Planner</h1>
      <EventForm eventId={editingId} onSave={handleSave} />
      <EventList key={refresh} />
    </div>
  );
}

export default App;


