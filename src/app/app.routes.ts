import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
//import { PreferitiComponent } from './preferiti/preferiti.component';
//


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    //{path: 'preferiti', component: PreferitiComponent}
    {path: '', redirectTo:'/home', pathMatch: 'full'}

];
