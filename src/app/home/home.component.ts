import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importazione per ngIf
import { RouterLink } from '@angular/router';

import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], // Aggiungi CommonModule qui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  fileList: { name: string, size: number }[] = [];
  popupVisible: boolean = false; // Variabile per controllare la visibilità del popup
  selectedFile: any;
  uploadSuccessMessage: string = ''; // Messaggio di conferma upload

  documents: any[] = [];
  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe(
      (data) => {
        this.documents = data;
      },
      (error) => {
        console.error('Errore nel recupero dei documenti:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.fileList = [{ name: file.name, size: file.size }];
      this.popupVisible = true;
    }
  }

  closePopup() {
    this.popupVisible = false;
  }

  saveDocumentDetails(docName: string, subject: string, description: string) {
    console.log({
      nome: docName,
      materia: subject,
      descrizione: description,
      dimensione: this.selectedFile?.size / 1024,
    });
    this.closePopup();
  }

  uploadDocument(docName: string, subject: string, description: string) {
    if (!this.selectedFile) {
      console.error("Nessun file selezionato.");
      return;
    }
  
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('name', docName);
    formData.append('subject', subject);
    formData.append('description', description);
  
    this.documentService.uploadDocument(formData).subscribe(
      (response) => {
        console.log("Documento caricato con successo:", response);
        this.uploadSuccessMessage = "Documento caricato con successo!"; // Mostra il messaggio
        setTimeout(() => this.uploadSuccessMessage = '', 3000); // Nasconde dopo 3 secondi
        this.closePopup();
      },
      (error) => {
        console.error("Errore durante il caricamento del documento:", error);
      }
    );
  }
}