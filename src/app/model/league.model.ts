import { PlayerLeagueModel } from "./player-league.model";

export interface LeagueModel {
    players: PlayerLeagueModel[];
    endDate: string;
    startDate: string;
    typeOfLeague: string;
    storeName: string;
    game: string;
    status: boolean;
}