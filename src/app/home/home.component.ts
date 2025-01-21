import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  fileList: { name: string, size: number }[] = [];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileList = [{ name: file.name, size: file.size }];
    }
  }
}