import { TeamsListComponent } from './pages/teams-list/teams-list.component';
import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsDetailComponent } from './pages/teams-detail/teams-detail.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: TeamsListComponent
  },
  {
    path: ':id',
    component: TeamsDetailComponent
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
export class TeamsRoutingModule { }
