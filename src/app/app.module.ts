import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterService } from './counter.service';
import { UserService } from './user.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponent } from './login/login.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from './http/http-service.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { RegistedUsersComponent } from './registed-users/registed-users.component'






@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    NewUserComponent,
    AllUsersComponent,
    LoginComponent,
    SignFormComponent,
    RegistedUsersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [CounterService,UserService,HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
