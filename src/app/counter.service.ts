import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter=0;
  InactiveToActiveCounter=0;

  activetoInactive(){
    this.activeToInactiveCounter++;
    console.log('active to inactive '+this.activeToInactiveCounter)
  }

  inactivetoActive(){
    this.InactiveToActiveCounter++;
    console.log('inactive to active '+this.InactiveToActiveCounter)
  }
  constructor() { }
}
