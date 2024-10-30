import React, { useState, useEffect } from 'react';
import EventForm from './EventForm.jsx';
import EventList from './EventList.jsx';

function Calendar() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await fetch('http://localhost:5000/events');
    const data = await response.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (event) => {
    await fetch('http://localhost:5000/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
    fetchEvents();
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <EventForm onSubmit={addEvent} />
      <EventList events={events} refreshEvents={fetchEvents} />
    </div>
  );
}

export default Calendar;
