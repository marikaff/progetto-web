import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';

//import { HeaderComponent } from './header/header.component';
//import { RegistrationComponent } from './registration/registration.component';
//import { FooterComponent } from './footer/footer.component';
//import { ProfiloComponent } from './app/profilo/profilo.component';
//import { AdminComponent } from './admin/admin.component';
//import { DocTemplateComponent } from './doc-template/doc-template.component';



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
