import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Programare } from 'src/models/programare';
import { ProgramareService } from 'src/services/programare.service';

@Component({
  selector: 'app-modificare-confirmare',
  templateUrl: './modificare-confirmare.component.html',
  styleUrls: ['./modificare-confirmare.component.css']
})
export class ModificareConfirmareComponent implements OnInit {
  programare: Programare[] | undefined;
  programare2: Programare = new Programare();
  constructor(private httpClient: HttpClient,private router: Router,
    private programariService :ProgramareService) { }

  ngOnInit(): void {
    this.getProgramari().subscribe(data => {
      console.log(this.programare = data);
    });
  }

  getProgramari(): Observable<Programare[]>{
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };
    return this.httpClient.get<Programare[]>(`http://localhost:8080/api/confirmare/programari`, options);
  }

  conf(id:number, userID:number, servID:number,pachetID:number, data:Date ){
    this.programare2.confirmare = "ACCEPTAT";
    this.programare2.userid = userID;
    this.programare2.serviciu_id = servID;
    this.programare2.pachet_id = pachetID;
    this.programare2.data_programare = data;
    this.programare2.id = id;
    this.programariService.updateProgramare(this.programare2,id).subscribe(data=>{
      console.log(data);
      location.reload();
    },
       error=>{console.log(error)})
  }

}
