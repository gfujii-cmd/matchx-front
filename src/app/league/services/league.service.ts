import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueModel } from 'src/app/model/league.model';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http:HttpClient) { }

  // get last leagues

  // get league by date
  getLeagueByDate(date: string): Observable<LeagueModel[]> {
    return this.http.get<LeagueModel[]>(`${BASE_URL}/league/findByDate?date=${date}`)
  }

  // get by range
  getLeagueByDateRange(sDate: string, eDate: string): Observable<LeagueModel[]> {
    return this.http.get<LeagueModel[]>(`${BASE_URL}/league/findByDateRange?sDate=${sDate}&eDate=${eDate}`)
  }

  // create new league
  create(league: LeagueModel): Observable<void> {
    return this.http.post<void>(`${BASE_URL}/league/register`, league)
  }

  // remove a league


  // edit league
}
