import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pachet } from 'src/models/pachet';
import { PachetService } from 'src/services/pachet.service';


@Component({
  selector: 'app-add-pachet',
  templateUrl: './add-pachet.component.html',
  styleUrls: ['./add-pachet.component.css']
})
export class AddPachetComponent implements OnInit {
  pachet: Pachet = new Pachet();

  constructor(public pachetService: PachetService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePachet(){
    this.pachetService.createPachet(this.pachet).subscribe( data =>{
      console.log(data);
      this.goToPachetList();
    },
    error => console.log(error));
  }

  goToPachetList(){
    this.router.navigate(['/pachet-list']);
  }

  onSubmit(){

       console.log(this.pachet)
      //  this.user.password = "{noop}"+ this.user.password;
   
       this.savePachet();
    }

}
