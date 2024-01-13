import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private/private.component';
import { PrivateDetailsComponent } from './private/private-details/private-details.component';
import { privateGuard } from './private/private.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'private',
        canActivate: [privateGuard],
        children: [
            {
                path: '',
                component: PrivateComponent,
                title: 'Private'
            },
            {
                path: ':id',
                component: PrivateDetailsComponent,
                title: 'Private details'
            }
        ]
    }
];
