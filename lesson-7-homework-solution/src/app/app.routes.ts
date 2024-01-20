import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'tasks',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'tasks',
      canActivate: [authGuard],
      loadChildren: () => import('./task/task.routes').then(m => m.taskRoutes)
    },
  ]
