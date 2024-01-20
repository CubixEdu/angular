import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  name = '';
  description = '';

  constructor(
    private readonly taskService: TaskService, 
    private readonly authService: AuthService, 
    private readonly router: Router
  ) { }

  addTask() {
    this.taskService.addTask({
      name: this.name, 
      description: this.description, 
      creator: this.authService.loggedInUser?.username ?? '',
      isDone: false
    });

    this.router.navigate(['tasks']);
  }

  cancel() {
    this.router.navigate(['tasks']);
  }
}
