import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Player } from 'src/app/core/models/player';
import { PlayerFormData } from 'src/app/core/models/player-form-data';
import { PlayerService } from 'src/app/core/services/http/player.service';
import { PlayerFormComponent } from '../../components/player-form/player-form.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players$: Observable<Player[]>;
  displayedColumns: string[] = ["id", "firstName", "lastName", "birthYear", "team", "update", "delete"];

  constructor(private _playerService: PlayerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.players$ = this._playerService.get();
  }
  delete(player: Player) {
    this._playerService.delete(player).subscribe(next => {
      this.loadData();
    })
  }

  openDialog(toUpdate: boolean, player: Player) {

    const playerFormData: PlayerFormData = {
      toUpdate: toUpdate,
      player: player
    };

    const dialogRef = this.dialog.open(PlayerFormComponent, {
      data: playerFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }
}
