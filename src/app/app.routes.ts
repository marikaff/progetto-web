import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';

//import { PreferitiComponent } from './preferiti/preferiti.component';
//import { AdminComponent } from './admin/admin.component';
//import { DocTemplateComponent } from './doc-template/doc-template.component';

//QUANDO SI CREANO LE PAGINE TOGLIERE COMMENTI A MANO A MANO


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'footer', component: FooterComponent},
    //{path: 'preferiti', component: PreferitiComponent},
    //{path: 'admin', component: AdminComponent},
    //{path: 'docTemplate', component:DocTemplateComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}

];
