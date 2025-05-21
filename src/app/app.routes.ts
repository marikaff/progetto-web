// app.routes.ts
import { Routes                } from '@angular/router';
import { PageNotFoundComponent } from './PageNotFound/page-not-found.component';
import { AuthGuard             } from './auth/auth.guard';
import { DocComponent          } from './doc/doc.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Homepage | Notes4Unical',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'login',
    title: 'Login | Notes4Unical',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    title: 'Register | Notes4Unical',
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'passrec',
    title: 'Password Recovery | Notes4Unical',
    loadComponent: () => import('./rec-pswd/rec-pswd.component').then(c => c.RecPswdComponent)
  },
  {
    path: 'admin',
    title: 'Dashboard - Admin | Notes4Unical',
    loadComponent: () => import('./admin-page/admin-page.component').then(c => c.AdminPageComponent),
    // canActivate: [AuthGuard] // Commentato per sviluppo
  },
  {
    path: 'dashboard',
    title: 'Dashboard - User | Notes4Unical',
    loadComponent: () => import('./user-page/user-page.component').then(c => c.UserPageComponent),
    // canActivate: [AuthGuard] // Commentato per sviluppo
  },
  {
    path: 'doc', 
    component: DocComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: '404 | Page Not Found',
    component: PageNotFoundComponent
  }
];