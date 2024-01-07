import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'demo',
      loadComponent: () => import('./demo/demo.component').then(m => m.DemoComponent)
    },
    {
      path: 'signal',
      loadChildren: () => import('./signal/signal.module').then(m => m.SignalModule)
    },
  ];
