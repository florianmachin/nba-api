import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomepageListComponent } from './pages/homepage-list/homepage-list.component';


@NgModule({
  declarations: [HomepageListComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
