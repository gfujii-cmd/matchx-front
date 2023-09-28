import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/create/create.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent
  },
  {
    path: 'criar',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
