import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  constructor(private renderer: Renderer2) {}

  toggleTheme(event: any) {
    if (event.target.checked) {
      console.log('Tema scuro attivato');
      this.enableDarkTheme();
    } else {
      console.log('Tema chiaro attivato');
      this.disableDarkTheme();
    }
  }

  enableDarkTheme() {
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'dark.css';  
    link.id = 'dark-theme'; 
  }
  //document.getElementById("id").style.setProperty("background-color":"red")


  disableDarkTheme() {
    const existingLink = document.getElementById('dark-theme');
    if (existingLink) {
      existingLink.remove(); // Rimuove il foglio di stile dark.css
    }
  }
}


