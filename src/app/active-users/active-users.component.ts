import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  user!:string[];
  

  onSetToInactivate(id:number){
    this.userService.setInactivate(id);
  }





  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.activeUser;
  }

}
