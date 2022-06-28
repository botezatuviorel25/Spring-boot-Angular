import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skip } from 'rxjs';
import { Pachet } from 'src/models/pachet';
import { Programare } from 'src/models/programare';
import { Serviciu } from 'src/models/serviciu';
import { PachetService } from 'src/services/pachet.service';
import { ProgramareService } from 'src/services/programare.service';
import { ServService } from 'src/services/servicii.service';


@Component({
  selector: 'app-add-programare',
  templateUrl: './add-programare.component.html',
  styleUrls: ['./add-programare.component.css']
})
export class AddProgramareComponent implements OnInit {
  programare: Programare = new Programare();
  pachet!: Pachet[];
  serviciu!: Serviciu[];
  selectedPachetID!: number;
  selectedServiciuID!: number;
  pretAfisare!:number;
  contentEditable!:boolean;
  constructor(public programareService: ProgramareService,
    private router: Router,
    public pachetService: PachetService,
    public serviciuService: ServService) { }
  
    toggleEditable($event:any) {
      if ( $event.target.checked ) {
          this.contentEditable = true;
     }else {this.contentEditable = false;
    }
  }

  ngOnInit(): void {
    this.getPachete();
    this.getServicii();
  }

  fct(){
    for(let i = 0; i<this.pachet.length; i++){
      if(this.pachet[i].id == this.selectedPachetID){
        this.pretAfisare = this.pachet[i].pret;
      }else skip;
    }
  }
  functie(){
    for(let i = 0; i<this.serviciu.length; i++){
      if(this.serviciu[i].id == this.selectedServiciuID){
        this.pretAfisare = this.serviciu[i].pret;
      }else skip;
    }
  }
  getPachete(){
    this.pachetService.getPachetList().subscribe(data => {
      console.log(this.pachet = data);
    });
  }

  getServicii(){
    this.serviciuService.getServiciiList().subscribe(data => {
      console.log(this.serviciu = data);
    });
  }



  saveProgramare(){
    if(this.contentEditable == true){
      this.programare.serviciu_id = this.selectedServiciuID;
    }else{
    this.programare.pachet_id = this.selectedPachetID;
    }
    
    this.programare.confirmare = "IN ASTEPTARE";
    this.programare.userid = Number(sessionStorage.getItem("USER_ID"));
    this.programareService.createProgramare(this.programare).subscribe( data =>{
      console.log(data);
      this.goToProgramareList();
    },
    error => console.log(error));
  }

  goToProgramareList(){
    if(sessionStorage.getItem("AUTH_ROLE") == "\"admin\"" ){
    this.router.navigate(['/programare-list']);
    }else if(sessionStorage.getItem("AUTH_ROLE") == "\"client\""){
      this.router.navigate(['/programarile-mele']);
    }
  }

  onSubmit(){

       console.log(this.programare)
      //  this.user.password = "{noop}"+ this.user.password;
   
       this.saveProgramare();
    }

}
