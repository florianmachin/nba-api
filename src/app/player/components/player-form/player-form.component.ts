import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from 'src/app/core/models/player';
import { PlayerFormData } from 'src/app/core/models/player-form-data';
import { PlayerService } from 'src/app/core/services/http/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  playerForm: FormGroup;

  formAction: string;

  teams: string[] = [
    "Golden State Warriors",
    "Los Angeles Lakers"
  ]

  constructor(private fb: FormBuilder,
    private _playerService: PlayerService,
    private _dialogRef: MatDialogRef<PlayerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlayerFormData) {
    this.formAction = data.toUpdate ? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.playerForm = this.fb.group({
        firstName: [data.player.firstName, [Validators.required, this.noWhitespaceValidator]],
        lastName: [data.player.lastName, [Validators.required, this.noWhitespaceValidator]],
        birthYear: [data.player.birthYear, [Validators.required]],
        team: [data.player.team, [Validators.required]]
      })
    }
    else {
      this.playerForm = this.fb.group({
        firstName: ['', [Validators.required, this.noWhitespaceValidator]],
        lastName: ['', [Validators.required, this.noWhitespaceValidator]],
        birthYear: ['', [Validators.required]],
        team: ['', [Validators.required]]
      })
    }
  }

  ngOnInit(): void {
  }

  onSubmit(player: Player) {
    if (this.playerForm.valid) {

      if (this.data.toUpdate) {
        player.id = this.data.player.id;
        this._playerService.put(player).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE updated A PLAYER");
          this.playerForm.reset();
          this._dialogRef.close();
        })
      } else {
        this._playerService.post(player).subscribe((next) => {
          console.log("YES WE DID IT !!! WE HAVE ADDED A NEW PLAYER");
          this.playerForm.reset();
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
