import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service'
import { PlayerModel } from 'src/app/model/player.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  player: PlayerModel = {
    name: '',
    nickname: '',
    surname: ''
  }

  successMsg: string | undefined

  errorMsg: string | undefined

  constructor(private playerService: PlayerService) {

  }
  
  createNewPlayer(): void {
    if(!(this.player.name === '' || this.player.nickname === '' || this.player.surname === '')) {
      this.playerService.create(this.player).subscribe({
        next: (res) => {
          this.successMsg = 'Usuário criado com sucesso.';
          this.player = {
            name: '',
            nickname: '',
            surname: ''
          }
          setTimeout(() => {
            this.successMsg = undefined
          }, 3000)
        },
        error: (err) => {
          console.error(err)
        }
      });
    } else {
      this.errorMsg = 'Preencha todos os campos'
      setTimeout(() => {
        this.errorMsg = undefined
      }, 3000)
    }
  }

}
