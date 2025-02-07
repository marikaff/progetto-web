import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = 'http://localhost:8080/api/documento'; // Sostituisci con l'URL del backend

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDocumentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
