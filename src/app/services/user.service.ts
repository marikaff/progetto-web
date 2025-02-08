import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  getUserByEmail(email : string) : Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/api/utente/${email}`);
  }

  createNewUser(user: User) : Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

}
