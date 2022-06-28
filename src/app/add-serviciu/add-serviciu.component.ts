import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serviciu } from 'src/models/serviciu';
import { ServService } from 'src/services/servicii.service';

@Component({
  selector: 'app-add-serviciu',
  templateUrl: './add-serviciu.component.html',
  styleUrls: ['./add-serviciu.component.css']
})
export class AddServiciuComponent implements OnInit {
  serviciu: Serviciu = new Serviciu();

  constructor(public servService: ServService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveServ(){
    this.servService.createServiciu(this.serviciu).subscribe( data =>{
      console.log(data);
      this.goToServList();
    },
    error => console.log(error));
  }

  goToServList(){
    this.router.navigate(['/serv-list']);
  }

  onSubmit(){

       console.log(this.serviciu)
      //  this.user.password = "{noop}"+ this.user.password;
   
       this.saveServ();
    }

}
