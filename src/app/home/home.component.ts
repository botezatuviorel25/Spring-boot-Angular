import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome!:string | null 
  
  constructor() { }

  ngOnInit(): void {
    if(JSON.stringify(sessionStorage.getItem("AUTH_ROLE")).includes("client") == true){
      this.welcome = "client"
    }else this.welcome = "admin"
    console.log(this.welcome)
  }

}
