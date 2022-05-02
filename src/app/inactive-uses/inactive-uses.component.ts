import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-uses',
  templateUrl: './inactive-uses.component.html',
  styleUrls: ['./inactive-uses.component.css']
})
export class InactiveUsesComponent implements OnInit {

  user!:string[];
  

  onSetToActivate(id:number){
    this.userService.setActivate(id);
  }


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.inactivateUser;
  }

}
