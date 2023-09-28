import { Component } from '@angular/core';
import { LeagueModel } from 'src/app/model/league.model';
import { PlayerLeagueModel } from 'src/app/model/player-league.model';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  league: LeagueModel = {} as LeagueModel
  
  players: PlayerLeagueModel[] = []

  storeOptions = ['DreamUP', 'FlowGames']

  selectedStore = ''
  selectedLeagueType = ''
  selectedGame = ''
  selectedDate: any
  isFinalizing = false

  successMsg: string | undefined

  errorMsg: string | undefined

  constructor(private leagueService: LeagueService) {}

  createNewLeague(): void {
    if(this.selectedDate === undefined || this.selectedGame === '' || this.selectedLeagueType === '' || this.selectedStore === '') {
      alert("Preencha todos os campos!")
    }
    this.league.storeName = this.selectedStore
    this.league.typeOfLeague = this.selectedLeagueType
    this.league.game = this.selectedGame
    this.league.players = this.players
    this.league.status = false
    this.league.startDate = this.formatDate(this.selectedDate)
    this.league.endDate = this.league.startDate
    this.league.status = this.isFinalizing
    
    this.leagueService.create(this.league).subscribe({
      next: () => {
        alert("Liga registrada com sucesso")
        this.league = {} as LeagueModel
      },
      error: () => {
        alert("Algo deu errado. Verifique os campos preenchidos e tente novamente")
      }
    })
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  pushNewPlayer(): void {
    const player: PlayerLeagueModel = {
      name: '',
      points: 0
    }
    this.players.push(player)
  }
}
