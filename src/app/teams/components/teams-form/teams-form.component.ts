import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Teams } from 'src/app/core/models/teams';
import { TeamsFormData } from 'src/app/core/models/teams-form-data';
import { TeamsService } from 'src/app/core/services/http/teams.service';
import { Player } from 'src/app/core/models/player';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/core/services/http/player.service';

@Component({
  selector: 'app-teams-form',
  templateUrl: './teams-form.component.html',
  styleUrls: ['./teams-form.component.css']
})
export class TeamsFormComponent implements OnInit {

  teamsForm: FormGroup;

  formAction: string;

  conferences: string[] = [
    'East',
    'West'
  ]

  players$: Observable<Player[]>;

  constructor(private fb: FormBuilder,
    private _teamsService: TeamsService,
    private _playerService: PlayerService,
    private _dialogRef: MatDialogRef<TeamsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TeamsFormData) {
    this.formAction = data.toUpdate ? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.loadData();
      this.teamsForm = this.fb.group({
        name: [data.teams.name, [Validators.required, this.noWhitespaceValidator]],
        city: [data.teams.city, [Validators.required, this.noWhitespaceValidator]],
        conference: [data.teams.conference, [Validators.required]],
        // player: [data.teams.player, [Validators.required]]
      })
    }
    else {
      this.loadData();
      this.teamsForm = this.fb.group({
        name: ['', [Validators.required, this.noWhitespaceValidator]],
        city: ['', [Validators.required, this.noWhitespaceValidator]],
        conference: ['', [Validators.required]],
        // player: ['', [Validators.required]]
      })
    }
  }

  loadData() {
    this.players$ = this._playerService.get();
    console.log(this.players$);
  }

  ngOnInit(): void {
  }

  onSubmit(teams: Teams) {
    if (this.teamsForm.valid) {

      if (this.data.toUpdate) {

        teams.id = this.data.teams.id;
        this._teamsService.put(teams).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE updated A teams");
          this.teamsForm.reset();
          this._dialogRef.close();
        })
      } else {
        this._teamsService.post(teams).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE ADDED A NEW teams");
          this.teamsForm.reset();
          this._dialogRef.close();
        })
      }


    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
