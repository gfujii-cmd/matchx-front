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
  rounds = undefined
  isBandai = false
  isMtg = false
  file!: File

  successMsg: string | undefined

  errorMsg: string | undefined

  constructor(private leagueService: LeagueService) {}

  createNewLeague(): void {
    if(this.selectedDate === undefined || this.selectedGame === '' || this.selectedLeagueType === '' || this.selectedStore === '') {
      alert("Preencha todos os campos!")
    }
    
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

  toggleBandai(): void {
    this.isBandai = !this.isBandai
  }

  toggleMtg(): void {
    this.isMtg = !this.isMtg
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.file = file
    }

  }

  sendFile(): void {

    this.league.typeOfLeague = this.selectedLeagueType
    this.league.date = this.formatDate(this.selectedDate)

    const formData = new FormData();

    formData.append("file", this.file);

    this.leagueService.createByBandai(this.league, formData).subscribe()

  }
}
