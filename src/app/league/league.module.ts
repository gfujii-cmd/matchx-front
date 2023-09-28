import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LeagueModule { }
