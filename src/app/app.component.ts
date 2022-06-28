import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public role!:string | null;
  title = 'AngularApp';
  admin: boolean = false;
  client: boolean = false;
constructor(private router: Router){}

ngOnInit(){
  
  this.role = sessionStorage.getItem("AUTH_ROLE");
  if(this.role == null){
    this.router.navigateByUrl("/login");
  }if (this.role == "\"admin\""){
    this.admin = true;
  }if (this.role == "\"client\""){
    this.client = true;
  }
  console.log(this.client);
  console.log(JSON.stringify(this.role));
}

logOut(){
  sessionStorage.clear();
  this.router.navigateByUrl("/login");
}

}
