import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public role!: string;
  password!:string;
  username!:string;
  user!: User[];
  checkData: Array<string> = new Array()
  warning:boolean = false;

  constructor(private httpClient: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  logins(){
    this.checkData.splice(0,2);
    console.log(this.checkData);
    this.checkData.push(this.username, this.password);
    this.getLoginData(this.checkData).subscribe(data=>{
      console.log(data);
      if(data == null) {this.warning=true} else {this.warning= false;
       sessionStorage.setItem("AUTH_ROLE", JSON.stringify(Object.values(data)[4]));
       sessionStorage.setItem("USER_ID", JSON.stringify(Object.values(data)[0]));
       
       if(JSON.stringify(Object.values(data)[4]) == "\"admin\""){
        this.router.navigate(['/user-list']).then(() => {
          window.location.reload();
        });
       }else {this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });}
       
      };
    }, 
      error=>{console.log(error)})
      console.log(this.checkData);
  }
  singin(){
    this.router.navigate(['/sign-up']).then(() => {
     });
     this.getSingUpData(this.checkData).subscribe(data=>{
      console.log(data)});
  }
  
  getLoginData(logData: string[]): Observable<User>{
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };
    return this.httpClient.post<User>(`http://localhost:8080/api/login`, logData, options);
  }
  getSingUpData(logData: string[]){
    let headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    let options = { headers: headers };
    return this.httpClient.post<User>(`http://localhost:8080/api/sing-up`, logData, options);
  }
}
