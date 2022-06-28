import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Programare } from 'src/models/programare';



@Injectable({
  providedIn: 'root'
})
export class ProgramareService {

  constructor(private httpClient: HttpClient) { }
  
  
  private baseURL =  `http://localhost:8080/api/programari`;
  private modifyURL = ``;
  
  getProgramareList(): Observable<Programare[]>{

    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    return this.httpClient.get<Programare[]>(`${this.baseURL}`, {headers});
  }
  createProgramare(programare: Programare): Observable<Object>{
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };

    return this.httpClient.post(`${this.baseURL}`, programare, options);
  }

  updateProgramare(programare: Programare, id:number): Observable<Object>{
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };

    return this.httpClient.put(`${this.baseURL}/${id}`, programare, options);
  }

  getProgramareByUserID(id: number): Observable<Programare[]>{
    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
    

    return this.httpClient.get<Programare[]>(`http://localhost:8080/api/programare/user/${id}`, {headers});
  }


}