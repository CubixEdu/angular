import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'ideas',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'ideas',
        canActivate: [authGuard],
        loadChildren: () => import('./ideas/ideas.routes').then(m => m.routes)
    }
];
