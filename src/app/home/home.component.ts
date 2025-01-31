import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importazione per ngIf
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], // Aggiungi CommonModule qui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  fileList: { name: string, size: number }[] = [];
  popupVisible: boolean = false; // Variabile per controllare la visibilità del popup
  selectedFile: any;

  documents = [
    { id: 1, title: 'Ingegneria software appunti', subject: 'Ingegneria Informatica', year: 'A.A. 2023/24' },
    { id: 2, title: 'Design Patterns', subject: 'Informatica', year: 'A.A. 2022/23' },
    { id: 3, title: 'Appunti Basi di dati 2022-2023', subject: 'Ingegneria Gestionale', year: 'A.A. 2024/25' },
    { id: 4, title: 'Fisica di base', subject: 'Biotecnologie', year: 'A.A. 2023/24' },
    { id: 5, title: 'Analisi Matematica 1', subject: 'Ingegneria Meccanica', year: 'A.A. 2021/22' }
  ];

  
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