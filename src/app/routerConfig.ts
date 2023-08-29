// routerConfig.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponentComponent } from './components/form-component/form-component.component';



const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'App Dashboard ',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'App Dashboard ',
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'App Dashboard ',
    },
  },
  {
    path: 'register',
    component: FormComponentComponent,
    data: {
      title: 'App Dashboard ',
    },
  },
];
export default appRoutes;