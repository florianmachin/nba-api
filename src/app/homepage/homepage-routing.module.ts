import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { HomepageListComponent } from './pages/homepage-list/homepage-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageListComponent
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
export class HomepageRoutingModule { }
