import React, { useEffect, useState } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const addEvent = (event) => {
    fetch("http://localhost:5000/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((newEvent) => setEvents((prev) => [...prev, newEvent]));
  };

  const updateEvent = (id, updatedEvent) => {
    fetch(`http://localhost:5000/api/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => res.json())
      .then(() => setEvents((prev) => prev.map((e) => (e.id === id ? updatedEvent : e))));
  };

  const deleteEvent = (id) => {
    fetch(`http://localhost:5000/api/events/${id}`, { method: "DELETE" })
      .then(() => setEvents((prev) => prev.filter((event) => event.id !== id)));
  };

  return (
    <div>
      <h1>Calendar</h1>
      <EventForm onSubmit={addEvent} />
      <EventList events={events} onEdit={updateEvent} onDelete={deleteEvent} />
    </div>
  );
}

export default Calendar;
