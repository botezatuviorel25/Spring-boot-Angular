import { Component, OnInit } from '@angular/core';
import { Programare } from 'src/models/programare';
import { ProgramareService } from 'src/services/programare.service';

@Component({
  selector: 'app-programarile-mele-list',
  templateUrl: './programarile-mele-list.component.html',
  styleUrls: ['./programarile-mele-list.component.css']
})
export class ProgramarileMeleListComponent implements OnInit {
  programare: Programare[] | undefined;
  
  constructor(public programareService: ProgramareService) { }

  ngOnInit(): void {
    this.getProgramare(Number(sessionStorage.getItem("USER_ID")));
    console.log(Number(sessionStorage.getItem("USER_ID")))
  }

  getProgramare(id : number){
    this.programareService.getProgramareByUserID(id).subscribe(data => {
      console.log(this.programare = data);
      console.log(this.programare[0].serviciu_id)
    });
  }


}
