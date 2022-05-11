import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private counterService:CounterService) { }

  activeUser=['Gayan','Sanka'];
  inactivateUser=['Rukshi','Panchalee'];

  setInactivate(id:number){
    this.inactivateUser.push(this.activeUser[id]);
    this.activeUser.splice(id,1);
    this.counterService.activetoInactive();
  }

  setActivate(id:number){
    this.activeUser.push(this.inactivateUser[id]);
    this.inactivateUser.splice(id,1);
    this.counterService.inactivetoActive();
  }

  setActivateUser(user:string){
    this.activeUser.push(user);
  }

  setInactivateUser(user:string){
    this.inactivateUser.push(user);
  }

  allUsers(){
    return this.activeUser.concat(this.inactivateUser);
  }


  
}
