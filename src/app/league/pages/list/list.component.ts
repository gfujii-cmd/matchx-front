import { Component, Input } from '@angular/core';
import { LeagueModel } from 'src/app/model/league.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() league!: LeagueModel;

  constructor(){}

  dateFormat(date: string): string {
    const parts = date.split('-');
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    return `${day}/${month}/${year}`;
  }

  gameNameFormat(name: string): string {
    const words = name.split(/[\s_-]/);
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join('');
  }
}
