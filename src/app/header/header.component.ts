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
    const ids = ["mainHome","h2recent","subtitle","header","footer","documentSection","popup","login-container"];

    const backgroundColor = event.target.checked ? "rgb(33, 31, 31)" : "white"; // Sfondo scuro o chiaro
    const textColor = event.target.checked ? "white" : "black"; // Testo bianco solo nel tema scuro
    
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
          element.style.setProperty("background-color", backgroundColor, "important");
          element.style.setProperty("color", textColor, "important");
      }
  });

    document.body.style.setProperty("background-color", backgroundColor, "important");
    document.body.style.setProperty("color", textColor, "important");

    console.log(`Tema ${event.target.checked ? 'scuro' : 'chiaro'} attivato`);
    }
  }
