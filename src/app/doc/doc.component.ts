import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
})
export class DocComponent implements OnInit {
  document: any;

  documents = [
    { id: 1, title: 'Ingegneria software appunti', subject: 'Ingegneria Informatica', description: 'Appunti completi', downloadUrl: '#' },
    { id: 2, title: 'Design Patterns', subject: 'Informatica', description: 'Guida ai pattern più usati', downloadUrl: '#' },
    { id: 3, title: 'Appunti Basi di dati 2022-2023', subject: 'Ingegneria Gestionale', description: 'Appunti esame', downloadUrl: '#' },
    { id: 4, title: 'Fisica di base', subject: 'Biotecnologie', description: 'Concetti base di fisica', downloadUrl: '#' },
    { id: 5, title: 'Analisi Matematica 1', subject: 'Ingegneria Meccanica', description: 'Esercizi svolti', downloadUrl: '#' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const docId = this.route.snapshot.paramMap.get('id');
    this.document = this.documents.find((doc) => doc.id === +docId!);
  }
}
