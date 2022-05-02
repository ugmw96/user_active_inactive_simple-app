import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveUsesComponent } from './active-uses/active-uses.component';
import { InactiveUsesComponent } from './inactive-uses/inactive-uses.component';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsesComponent,
    InactiveUsesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
