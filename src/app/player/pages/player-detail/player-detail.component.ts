import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/core/models/player';
import { PlayerService } from 'src/app/core/services/http/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  playerId: number;

  player$: Observable<Player>;
  constructor(private _activateRoute: ActivatedRoute,
    private _playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.playerId) {
      this.fetchData(this.playerId);
    }
  }
  fetchData(id: number): void {
    this.player$ = this._playerService.getById(id);
  }

}
