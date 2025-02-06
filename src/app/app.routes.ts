import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';

import { ProfiloComponent } from './profilo/profilo.component';
import { AdminComponent } from './admin/admin.component';
import { DocComponent } from './doc/doc.component';
import { ModificaPasswordComponent } from './modifica-password/modifica-password.component';
import { AuthGuard } from './services/auth.guard';




export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'profilo', component: ProfiloComponent, canActivate: [AuthGuard]},
    {path: 'modifica-password', component: ModificaPasswordComponent},
    {path: 'admin', component: AdminComponent},

    {path: 'doc/:id/:title/:subject/:year', component: DocComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'},

    { path: '**', redirectTo: 'home' } //così l'utente viene reindirizzato ogni volta al login
                                    //quando navig verso una rotta sconosciuta

];
