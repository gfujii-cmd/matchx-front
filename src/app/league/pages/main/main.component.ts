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
    this.leagueService.getLeagueByDate(this.formatDate(date)).subscribe({
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
    this.leagueService.getLeagueByDateRange(this.formatDate(sDate), this.formatDate(eDate)).subscribe({
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

  formatDate(dateString: string): string {
    const parts = dateString.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
}
