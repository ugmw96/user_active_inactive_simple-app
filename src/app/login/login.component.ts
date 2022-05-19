import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username':new FormControl(null),
      'email':new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.loginForm);
  }
  

}
