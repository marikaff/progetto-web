import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';

import { ProfiloComponent } from './profilo/profilo.component';
import { AdminComponent } from './admin/admin.component';
import { DocComponent } from './doc/doc.component';




export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'profilo', component: ProfiloComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'doc', component:DocComponent},
    //{path: 'doc/:title', component: DocComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}

];
