import { Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

export const taskRoutes: Routes = [
  {
    path: '',
    component: ListTasksComponent
  },
  {
    path: 'new',
    component: NewTaskComponent
  }
]
