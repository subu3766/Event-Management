import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventManagementPage() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    location: '',
    date: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };

  const handleCreateEvent = async () => {
    try {
      await axios.post('/api/events', newEvent);
      fetchEvents();
      setNewEvent({ name: '', description: '', location: '', date: '' });
    } catch (error) {
      console.error('Error creating event', error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event', error);
    }
  };

  return (
    <div>
      <h1>Event Management</h1>
      <div className="mb-4">
        <h3>Create Event</h3>
        <input
          type="text"
          placeholder="Name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleCreateEvent}>
          Create
        </button>
      </div>
      <h3>Event List</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.description} - {event.location} - {event.date}
            <button className="btn btn-danger ms-3" onClick={() => handleDeleteEvent(event.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventManagementPage;
