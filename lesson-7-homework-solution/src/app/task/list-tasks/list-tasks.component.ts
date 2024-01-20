import { Component, Signal, computed } from '@angular/core';
import { TaskService } from '../task.service';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { RouterLink } from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, RouterLink],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent {
  todoTasks: Signal<Task[]>;
  doneTasks: Signal<Task[]>;

  constructor(
    private readonly taskServcie: TaskService, 
    private readonly authService: AuthService
  ) {
    this.todoTasks = computed(() => this.taskServcie.tasks().filter(task => !task.isDone))
    this.doneTasks = computed(() => this.taskServcie.tasks().filter(task => task.isDone))
  }

  logout() {
    this.authService.logout();
  }
}
