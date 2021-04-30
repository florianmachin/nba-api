import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-list',
  templateUrl: './homepage-list.component.html',
  styleUrls: ['./homepage-list.component.css']
})
export class HomepageListComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  openTeams() {
    this._route.navigateByUrl('teams');
  }

  openPlayer() {
    this._route.navigateByUrl('players');
  }
}
