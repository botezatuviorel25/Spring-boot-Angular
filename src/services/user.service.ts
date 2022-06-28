import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  
  
  private baseURL =  `http://localhost:8080/api/users`;
  private modifyURL = `http://localhost:8080/api/user`;
  
  getUserList(): Observable<User[]>{

    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    return this.httpClient.get<User[]>(`${this.baseURL}`, {headers});
  }

  createUser(user: User): Observable<Object>{
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };

    return this.httpClient.post(`${this.baseURL}`, user, options);
  }

  deleteUser(id: number): Observable<Object>{
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };

    return this.httpClient.delete(`${this.modifyURL}/${id}`,{headers});
  }


  
}