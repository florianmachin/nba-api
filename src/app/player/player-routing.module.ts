import { PlayerListComponent } from './pages/player-list/player-list.component';
import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: PlayerListComponent
  },
  {
    path: ':id',
    component: PlayerDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
