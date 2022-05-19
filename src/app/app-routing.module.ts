import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RegistedUsersComponent } from './registed-users/registed-users.component';
import { SignFormComponent } from './sign-form/sign-form.component';

const routes: Routes = [
  {path: '', component: AllUsersComponent},
  {path: 'activeusers', component: ActiveUsersComponent},
  {path: 'inactiveusers' , component: InactiveUsersComponent},
  {path: 'allusers', component: AllUsersComponent},
  {path: 'newuser', component:NewUserComponent},
  {path: 'signup' , component:SignFormComponent},
  {path: 'registed-user' , component:RegistedUsersComponent},
  {path: 'login' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
