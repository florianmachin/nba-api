import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Player } from '../../models/player';
import { Teams } from '../../models/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  endPoint: string = environment.teamsEndpoint;

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Teams[]> {
    return this._httpClient.get<Teams[]>(this.endPoint);
  }

  getById(id: number): Observable<Teams> {
    return this._httpClient.get<Teams>(this.endPoint + "/" + id);
  }

  // getByTeams(Player: Player): Observable<Player[]> {
  //   return this._httpClient.get<Player[]>(this.endPoint + "/" + Player.team);
  // }

  post(Teams: Teams): Observable<Teams> {
    return this._httpClient.post<Teams>(this.endPoint, Teams);
  }

  put(Teams: Teams): Observable<Teams> {
    return this._httpClient.put<Teams>(this.endPoint + "/" + Teams.id, Teams)
  }

  delete(Teams: Teams): Observable<Teams> {
    return this._httpClient.delete<Teams>(this.endPoint + "/" + Teams.id)
  }
}
