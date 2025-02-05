import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
})
export class DocComponent implements OnInit {
   isFavorite = false;
     toggleFavorite() {
         this.isFavorite = !this.isFavorite;
     }

    
  document: any;


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const docId = this.route.snapshot.paramMap.get('id');
    const title = this.route.snapshot.paramMap.get('title');
    const subject = this.route.snapshot.paramMap.get('subject');
    const year = this.route.snapshot.paramMap.get('year');
  
    this.document = {
      id: +docId!,
      title: title!,
      subject: subject!,
      year: year!,
    };
  }
}
