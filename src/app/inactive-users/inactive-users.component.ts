import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  user!:string[];
  

  onSetToActivate(id:number){
    this.userService.setActivate(id);
  }


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.inactivateUser;
  }
}
