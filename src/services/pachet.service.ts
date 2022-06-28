import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pachet } from '../models/pachet';


@Injectable({
  providedIn: 'root'
})
export class PachetService {

  constructor(private httpClient: HttpClient) { }
  
  
  private baseURL =  `http://localhost:8080/api/pachete`;
  private modifyURL = ``;
  
  getPachetList(): Observable<Pachet[]>{

    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    return this.httpClient.get<Pachet[]>(`${this.baseURL}`, {headers});
  }

  createPachet(pachet: Pachet): Observable<Object>{
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };

    return this.httpClient.post(`${this.baseURL}`, pachet, options);
  }
  
}