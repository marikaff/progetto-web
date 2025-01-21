import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  toggleTheme(event: any) {
    if (event.target.checked) {
      console.log('Tema scuro attivato');
      // Aggiungi logica per cambiare tema o altre azioni
    } else {
      console.log('Tema chiaro attivato');
      // Aggiungi logica per cambiare tema o altre azioni
    }
  }
}