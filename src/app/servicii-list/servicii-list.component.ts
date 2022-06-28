import { Component, OnInit } from '@angular/core';
import { Serviciu } from 'src/models/serviciu';
import { ServService } from 'src/services/servicii.service';

@Component({
  selector: 'app-servicii-list',
  templateUrl: './servicii-list.component.html',
  styleUrls: ['./servicii-list.component.css']
})
export class ServiciiListComponent implements OnInit {

  serviciu: Serviciu[] | undefined;
  
  constructor(public servService: ServService) { }

  ngOnInit(): void {
    this.getService();
  }

  getService(){
    this.servService.getServiciiList().subscribe(data => {
      console.log(this.serviciu = data);
    });
  }


}
