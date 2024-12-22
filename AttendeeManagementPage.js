import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AttendeeManagementPage() {
  const [attendees, setAttendees] = useState([]);
  const [newAttendee, setNewAttendee] = useState('');

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    try {
      const response = await axios.get('/api/attendees');
      setAttendees(response.data);
    } catch (error) {
      console.error('Error fetching attendees', error);
    }
  };

  const handleAddAttendee = async () => {
    try {
      await axios.post('/api/attendees', { name: newAttendee });
      fetchAttendees();
      setNewAttendee('');
    } catch (error) {
      console.error('Error adding attendee', error);
    }
  };

  const handleDeleteAttendee = async (id) => {
    try {
      await axios.delete(`/api/attendees/${id}`);
      fetchAttendees();
    } catch (error) {
      console.error('Error deleting attendee', error);
    }
  };

  return (
    <div>
      <h1>Attendee Management</h1>
      <input
        type="text"
        placeholder="Attendee Name"
        value={newAttendee}
        onChange={(e) => setNewAttendee(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddAttendee}>
        Add
      </button>
      <h3>Attendee List</h3>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee.id}>
            {attendee.name}
            <button className="btn btn-danger ms-3" onClick={() => handleDeleteAttendee(attendee.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendeeManagementPage;
