import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsListComponent } from './pages/teams-list/teams-list.component';
import { TeamsDetailComponent } from './pages/teams-detail/teams-detail.component';
import { TeamsFormComponent } from './components/teams-form/teams-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TeamsComponent, TeamsListComponent, TeamsFormComponent, TeamsDetailComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule
  ]
})
export class TeamsModule { }
