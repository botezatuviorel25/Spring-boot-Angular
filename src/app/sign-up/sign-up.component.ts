import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  rol!:string;
  user: User = new User();

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }


  saveUser(){
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/login']);
  }

  onSubmit(){

       console.log(this.user)
      //  this.user.password = "{noop}"+ this.user.password;
      this.user.role = "client";
       this.saveUser();
    }

    client(){this.user.role = "client"; this.rol ="Client"; }
    admin(){this.user.role = "admin"; this.rol ="Admin";}
}
