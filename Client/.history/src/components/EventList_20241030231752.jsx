import React from 'react';

function EventList({ events, refreshEvents }) {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/events/${id}`, { method: 'DELETE' });
    refreshEvents();
  };

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.date} at {event.time}</p>
          <p>{event.description}</p>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
