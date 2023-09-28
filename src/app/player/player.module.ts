import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MainComponent } from './pages/main/main.component';
import { RankingComponent } from './components/ranking/ranking.component';


@NgModule({
  declarations: [
    CreateComponent,
    ProfileComponent,
    MainComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ]
})
export class PlayerModule { }
