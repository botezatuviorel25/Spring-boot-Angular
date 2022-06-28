import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Programare } from 'src/models/programare';
import { ProgramareService } from 'src/services/programare.service';


@Component({
  selector: 'app-programare-list',
  templateUrl: './programare-list.component.html',
  styleUrls: ['./programare-list.component.css']
})
export class ProgramareListComponent implements OnInit {
  programare: Programare[] | undefined;
  
  constructor(public programareService: ProgramareService) { }

  ngOnInit(): void {
    this.getProgramare();
  }

  getProgramare(){
    this.programareService.getProgramareList().subscribe(data => {
      console.log(this.programare = data);
    });
  }

}
