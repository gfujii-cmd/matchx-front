import { Component } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { LeagueModel } from 'src/app/model/league.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  leagues!: LeagueModel[];

  constructor(private leagueService: LeagueService) {}

  searchLeagueWithDate(date: string): void {
    this.leagueService.getLeagueByDate(date).subscribe({
      next: (result: LeagueModel[]) => {
        this.leagues = result
      },
      error: (err) => {
        if(err.status === 404) {
          alert(`Nenhuma liga encontrada para a data fornecida`)
        } else {
          alert(`Um erro inesperado ocorreu`)
        }
      }
    })
  }

  searchLeagueWithDateRange(sDate: string, eDate: string): void {
    this.leagueService.getLeagueByDateRange(sDate, eDate).subscribe({
      next: (result: LeagueModel[]) => {
        this.leagues = result
      },
      error: (err) => {
        if(err.status === 404) {
          alert(`Nenhuma liga encontrada para a data fornecida`)
        } else {
          alert(`Um erro inesperado ocorreu`)
        }
      }
    })
  }
}
