import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from '../http/http-service.service';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {

  
@ViewChild('f') singupForm!:NgForm
  
//  user:User={name:"gayan",email:"ugmw99@gmail.com",password:"1234"}
  

  constructor(private httpService:HttpServiceService) { }

  user:User=new User();
  

  onSubmit():void{
    console.log(this.user);

    this.httpService.createUser(this.user).subscribe(
      (responseData) => console.log(responseData),
      (error:any) => console.log(error),
      ()=> console.log("user POsted")
    )
    this.singupForm.reset();
    

  }

  

  ngOnInit(): void {
    
    
  }

  

}
