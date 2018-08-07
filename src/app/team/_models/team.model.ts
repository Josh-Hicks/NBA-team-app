import { Player } from '../player/_models/player.model'

export class Team {
    name: string
    players: Player[]

    constructor(name: string, players?: Player[]) {
        this.name = name
        this.players = players
    }
} 