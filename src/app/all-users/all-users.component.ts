import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsers!:string[];

  constructor(private userService:UserService , private router:Router) { }

  refresh(){
    // this.allUsers=this.userService.activeUser.concat(this.userService.inactivateUser);
    this.allUsers=this.userService.allUsers();
  }

  onNewUser(){
    this.router.navigate(['/newuser']);
  }

  ngOnInit(): void {
    this.allUsers=this.userService.allUsers();
  }

  onRemove(id:number){
    this.allUsers.splice(id,1);
  }

}
