import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../services/document.service';


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


  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {}

  //cosi prende i documenti dalla pagina home (o dal back)



  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.document = {
        id: +params.get('id')!,
        title: params.get('title') || 'Senza titolo',
        subject: params.get('subject') || 'Senza materia',
        year: params.get('year') || 'Senza anno',
        downloadUrl: '', // Evita errori di link
      };
    });
  }
}

    // if (docId) {
    //   this.documentService.getDocumentById(+docId).subscribe(
    //     (data) => {
    //       this.document = data;
    //     },
    //     (error) => {
    //       console.error('Errore nel caricamento del documento:', error);
    //     }
    //   );
  // ngOnInit(): void {
  //   const docId = this.route.snapshot.paramMap.get('id');
  //   const title = this.route.snapshot.paramMap.get('title');
  //   const subject = this.route.snapshot.paramMap.get('subject');
  //   const year = this.route.snapshot.paramMap.get('year');
  
  //   this.document = {
  //     id: +docId!,
  //     title: title!,
  //     subject: subject!,
  //     year: year!,
  //   };
  