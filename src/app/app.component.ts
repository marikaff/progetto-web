import { Component, OnInit } from '@angular/core';
import { RouterOutlet      } from '@angular/router';
import { HeaderComponent   } from './header/header.component';
import { FooterComponent   } from './footer/footer.component';
import { ThemeService      } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }
}
