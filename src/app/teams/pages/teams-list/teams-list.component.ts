import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Teams } from 'src/app/core/models/teams';
import { TeamsFormData } from 'src/app/core/models/teams-form-data';
import { TeamsService } from 'src/app/core/services/http/teams.service';
import { TeamsFormComponent } from '../../components/teams-form/teams-form.component';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teamss$: Observable<Teams[]>;
  displayedColumns: string[] = ["id", "name", "city", "conference", "detail", "update", "delete"];

  constructor(private _teamsService: TeamsService, public dialog: MatDialog, private _route: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.teamss$ = this._teamsService.get();
  }
  delete(teams: Teams) {
    this._teamsService.delete(teams).subscribe(next => {
      this.loadData();
    })
  }

  openDialog(toUpdate: boolean, teams: Teams) {

    const TeamsFormData: TeamsFormData = {
      toUpdate: toUpdate,
      teams: teams
    };

    const dialogRef = this.dialog.open(TeamsFormComponent, {
      data: TeamsFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }

  openDetail(id) {
    this._route.navigateByUrl('teams/' + id);
  }
}
