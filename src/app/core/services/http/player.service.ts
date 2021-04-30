import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Player } from '../../models/player';

@Injectable()
export class PlayerService {

  endPoint: string = environment.playerEndpoint;

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Player[]> {
    return this._httpClient.get<Player[]>(this.endPoint);
  }

  getById(id: number): Observable<Player> {
    return this._httpClient.get<Player>(this.endPoint + "/" + id);
  }

  post(player: Player): Observable<Player> {
    return this._httpClient.post<Player>(this.endPoint, player);
  }

  put(player: Player): Observable<Player> {
    return this._httpClient.put<Player>(this.endPoint + "/" + player.id, player)
  }

  delete(player: Player): Observable<Player> {
    return this._httpClient.delete<Player>(this.endPoint + "/" + player.id)
  }
}
