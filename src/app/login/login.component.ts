import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

//serve per togliere il cursore dopo che finsice di scrivere
export class LoginComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      const title = document.querySelector('h1');
      if (title) {
        title.classList.add('no-cursor');
      }
    }, 1500); // 1.5 secondi = durata dell'animazione typing
  }

}