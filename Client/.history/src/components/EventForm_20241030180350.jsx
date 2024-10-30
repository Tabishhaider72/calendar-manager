import React, { useState } from "react";

function EventForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date) {
      onSubmit({ title, date, description });
      setTitle("");
      setDate("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
