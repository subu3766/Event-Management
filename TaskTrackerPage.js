import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskTrackerPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`/api/tasks/${id}`, { status });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task status', error);
    }
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.deadline} - {task.status}
            <button
              className="btn btn-success ms-3"
              onClick={() => handleStatusChange(task.id, 'Completed')}
              disabled={task.status === 'Completed'}
            >
              Mark as Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTrackerPage;
