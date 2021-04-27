import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Player } from 'src/app/core/models/player';
import { Teams } from 'src/app/core/models/teams';
import { PlayerService } from 'src/app/core/services/http/player.service';
import { TeamsService } from 'src/app/core/services/http/teams.service';


@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.css']
})
export class TeamsDetailComponent implements OnInit {

  teamsId: number;

  teams$: Observable<Teams>;

  players$: Observable<Player[]>;

  constructor(private _activateRoute: ActivatedRoute,
    private _playerService: PlayerService,
    private _teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.teamsId) {
      this.fetchData(this.teamsId);
      // this.fetchPlayer(this.teamsId);
    }
  }
  fetchData(id: number): void {
    this.teams$ = this._teamsService.getById(id);
  }
  fetchPlayer(Player: Player): void {
    // this.players$ = this._teamsService.getByTeams(Player.team);
  }
}
