import React, { useState } from "react";

function EventList({ events, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({});

  const handleEdit = (event) => {
    setIsEditing(event.id);
    setUpdatedEvent(event);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onEdit(isEditing, updatedEvent);
    setIsEditing(null);
  };

  return (
    <ul>
      {events.map((event) =>
        isEditing === event.id ? (
          <form key={event.id} onSubmit={handleUpdate}>
            <input type="text" value={updatedEvent.title} onChange={(e) => setUpdatedEvent({ ...updatedEvent, title: e.target.value })} />
            <input type="datetime-local" value={updatedEvent.date} onChange={(e) => setUpdatedEvent({ ...updatedEvent, date: e.target.value })} />
            <textarea value={updatedEvent.description} onChange={(e) => setUpdatedEvent({ ...updatedEvent, description: e.target.value })} />
            <button type="submit">Save</button>
          </form>
        ) : (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <button onClick={() => handleEdit(event)}>Edit</button>
            <button onClick={() => onDelete(event.id)}>Delete</button>
          </li>
        )
      )}
    </ul>
  );
}

export default EventList;
