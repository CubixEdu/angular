import { Component, Input } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { TaskPipe } from "../task.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
    imports: [CommonModule, TaskPipe]
})
export class TaskComponent {
  @Input({required: true}) task?: Task;

  constructor(private readonly taskService: TaskService) { }

  markAsDone() {
    if(this.task) {
      this.taskService.markAsDone(this.task);
    }
  }
}
