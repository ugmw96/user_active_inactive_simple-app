import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  apiUrl= environment.url;

  constructor(private http:HttpClient) { }

  createUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/user`, user);
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }

  getUserById():Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/user/2`)
  }

  deleteAllUsers():Observable<User>{
    return this.http.delete<User>(`${this.apiUrl}/users/deleteAll`)
  }
}
