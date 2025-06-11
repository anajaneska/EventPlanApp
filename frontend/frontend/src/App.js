import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        {/* додади подоцна и /create и /edit/:id */}
      </Routes>
    </Router>
  );
}

export default App;

