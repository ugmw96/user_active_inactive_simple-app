import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-uses',
  templateUrl: './active-uses.component.html',
  styleUrls: ['./active-uses.component.css']
})
export class ActiveUsesComponent implements OnInit {

  user!:string[];
  

  onSetToInactivate(id:number){
    this.userService.setInactivate(id);
  }





  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.activeUser;
  }

}
