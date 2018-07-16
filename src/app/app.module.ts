import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { CoachComponent } from './team/coach/coach.component';
import { PlayerComponent } from './team/player/player.component';
import { TeamFormService } from './team/team-form.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    CoachComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TeamFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
