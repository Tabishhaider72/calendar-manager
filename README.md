# Simple Calendar App

This is a basic calendar application that allows users to create, view, edit, and delete events on a personal calendar. The project consists of both frontend and backend components, built with JavaScript (JSX and React.js), and provides basic user authentication and event management.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)

---

## Features

### User Authentication
- Basic authentication with name and email (without a persistent database).
- User is redirected to the main calendar page after authentication.

### Calendar Features
- **Create Event:** Users can add events with title, date & time, and description.
- **View Events:** Display a list of all events.
- **Edit Event:** Modify details of an existing event.
- **Delete Event:** Remove events from the calendar.

### Backend
- REST API to handle CRUD operations for events.
- Temporary storage for events (using in-memory storage, as there is no database integration).

### Frontend
- A simple, intuitive UI for managing events, including:
  - A calendar view for organizing events.
  - Forms for adding and editing events.
  - A list view for events.

---

## Folder Structure

The project follows this structure:

```plaintext
calendar-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Calendar.js       # Calendar UI component
│   │   │   ├── EventForm.js      # Form for creating/editing events
│   │   │   ├── EventList.js      # List of events
│   │   │   └── Login.js          # Login page for authentication
│   │   ├── App.js                # Main App component
│   │   └── index.js              # Entry point for React app
│   └── package.json              # Client dependencies
├── server/
│   ├── index.js                  # Server entry point
│   └── routes/
│       └── events.js             # Routes for CRUD operations on events
└── package.json                  # Server dependencies

```

## Tech Stack

- **Frontend:** React.js, JSX
- **Backend:** Node.js, Express
- **Authentication:** Basic in-app session management (without a database)
- **Storage:** In-memory (temporary storage)

---

## Getting Started

### Clone the Repository

```bash
git clone [https://github.com/yourusername/calendar-app.git](https://github.com/Tabishhaider72/calendar-manager)
```
cd calendar-app
