import { PlayerLeagueModel } from "./player-league.model";

export interface LeagueModel {
    players: PlayerLeagueModel[];
    date: string;
    typeOfLeague: string;
    storeName: string;
    game: string;
    status: boolean;
}