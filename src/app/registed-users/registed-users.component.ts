import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http/http-service.service';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-registed-users',
  templateUrl: './registed-users.component.html',
  styleUrls: ['./registed-users.component.css']
})
export class RegistedUsersComponent implements OnInit {

  allusers!:User[];

  constructor(private httpService:HttpServiceService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers():void{
    this.httpService.getUsers().subscribe(
      (res)=> this.allusers=res,
      // (res)=> console.log(res),
      (error:any) => console.log(error),
      ()=> console.log("get all done")
    )
    
  }

  deleteUser(id:number){
    
  }

  editUser(){

  }

}
