import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayerListComponent } from './pages/player-list/player-list.component';
import { PlayerRoutingModule } from './player-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';


@NgModule({
  declarations: [PlayerComponent, PlayerFormComponent, PlayerListComponent, PlayerDetailComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    SharedModule
  ]
})
export class PlayerModule { }
