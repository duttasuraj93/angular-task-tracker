import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/types/tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleTask.emit(task)
  }

}
