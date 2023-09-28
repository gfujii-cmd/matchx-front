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

  successMsg: string | undefined

  errorMsg: string | undefined

  constructor(private leagueService: LeagueService) {}

  createNewLeague(): void {
    this.league.storeName = this.selectedStore
    this.league.typeOfLeague = this.selectedLeagueType
    this.league.game = this.selectedGame
    this.league.players = this.players
    this.league.status = false
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

  pushNewPlayer(): void {
    const player: PlayerLeagueModel = {
      name: '',
      points: 0
    }
    this.players.push(player)
  }
}
