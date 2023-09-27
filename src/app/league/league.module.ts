import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { RankingComponent } from './pages/ranking/ranking.component';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ]
})
export class LeagueModule { }
