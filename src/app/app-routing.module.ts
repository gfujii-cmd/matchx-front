import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'league',
    loadChildren: () => import('./league/league.module').then(m => m.LeagueModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)
  },
  { 
    path: '', 
    redirectTo: '/league', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
