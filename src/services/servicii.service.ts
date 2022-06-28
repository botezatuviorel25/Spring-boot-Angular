import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Serviciu } from 'src/models/serviciu';


@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private httpClient: HttpClient) { }
  
  
  private baseURL =  `http://localhost:8080/api/servicii`;
  private modifyURL = ``;
  
  getServiciiList(): Observable<Serviciu[]>{

    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    return this.httpClient.get<Serviciu[]>(`${this.baseURL}`, {headers});
  }


  createServiciu(serviciu: Serviciu): Observable<Object>{
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };

    return this.httpClient.post(`${this.baseURL}`, serviciu, options);
  }
  
}