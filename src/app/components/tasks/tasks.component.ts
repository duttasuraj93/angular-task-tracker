import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/types/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res
    })
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(item => item.id !== task.id)
    })
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder
    this.taskService.toggleTask(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(res => {
      this.tasks.push(task)
    })
  }

}
