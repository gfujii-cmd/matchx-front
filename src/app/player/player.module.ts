import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    CreateComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
