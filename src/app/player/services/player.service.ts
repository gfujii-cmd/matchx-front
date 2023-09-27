import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerModel } from 'src/app/model/player.model';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  create(player: PlayerModel): Observable<void> {
    return this.http.post<void>(`${BASE_URL}/player/register`, player)
  }
}
