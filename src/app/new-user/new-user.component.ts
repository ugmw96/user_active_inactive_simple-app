import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  setActive(status:string){
    this.userService.setActivateUser(status);
  }

  setInactive(status:string){
    this.userService.setInactivateUser(status);
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
