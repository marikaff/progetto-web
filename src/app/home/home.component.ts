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
    //console.log("Evento di selezione file attivato", event);  // Verifica se l'evento viene attivato
    const file = event.target.files[0];
    if (file) {
      console.log("File selezionato:", file);
      this.selectedFile = file;
      this.fileList = [{ name: file.name, size: file.size }];
      this.popupVisible = true; // Mostra il popup solo dopo aver selezionato un file
      //console.log('Popup visibile:', this.popupVisible); // Aggiungi un log per verificare il valore di popupVisible
    }
  }

  closePopup() {
    this.popupVisible = false; // Nascondi il popup quando si clicca su "Chiudi"
    //console.log('Popup chiuso:', this.popupVisible); // Aggiungi un log per verificare che il popup venga chiuso
  }


  //questa funzione serve solo per debugging, restituisce nome documento
  //materia, descrizione e dimensione file
  saveDocumentDetails(docName: string, subject: string, description: string) {
    console.log({
      nome: docName,        // Nome del documento selezionato
      materia: subject,     // Materia del documento
      descrizione: description, // Descrizione del documento
      dimensione: this.selectedFile?.size / 1024, // Dimensione del file in KB
    });
    this.closePopup(); // Nascondi il popup dopo il salvataggio
    
  }
}