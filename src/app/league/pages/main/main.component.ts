import { Component } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { LeagueModel } from 'src/app/model/league.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  league!: LeagueModel;

  constructor(private leagueService: LeagueService) {}

  searchLeagueWithDate(date: string): void {
    console.log(date)
    this.leagueService.getLeagueByDate(date).subscribe({
      next: (result: LeagueModel[]) => {
        this.league = result[0]
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
