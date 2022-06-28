import { Component, OnInit } from '@angular/core';
import { Pachet } from 'src/models/pachet';
import { PachetService } from 'src/services/pachet.service';



@Component({
  selector: 'app-pachet-list',
  templateUrl: './pachet-list.component.html',
  styleUrls: ['./pachet-list.component.css']
})
export class PachetListComponent implements OnInit {

  pachet: Pachet[] | undefined;
  
  constructor(public pachetService: PachetService) { }

  ngOnInit(): void {
    this.getPachete();
  }

  getPachete(){
    this.pachetService.getPachetList().subscribe(data => {
      console.log(this.pachet = data);
    });
  }


}
