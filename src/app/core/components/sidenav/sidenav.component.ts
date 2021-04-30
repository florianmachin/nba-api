import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  openTeams() {
    this._route.navigateByUrl('teams');
  }

  openHomePage() {
    this._route.navigateByUrl('homepage');
  }

  openPlayer() {
    this._route.navigateByUrl('players');
  }

}
