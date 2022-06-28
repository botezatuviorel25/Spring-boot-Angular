import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[] | undefined;
  
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUserList().subscribe(data => {
      console.log(this.user = data);
    });
  }

  deleteUser(id:number){
    console.log(id);
    this.userService.deleteUser(Number(id)).subscribe(data=>{
      location.reload();
    }, error=>{})
  }

}
