package main.java.com.eventmanagement.controller;

import com.eventmanagement.model.Task;
import com.eventmanagement.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/event/{eventId}")
    public List<Task> getTasksByEvent(@PathVariable Long eventId) {
        return taskService.getTasksByEvent(eventId);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @PutMapping("/{taskId}/status")
    public Task updateTaskStatus(@PathVariable Long taskId, @RequestBody String status) {
        return taskService.updateTaskStatus(taskId, status);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}
