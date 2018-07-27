import { FormArray, FormControl } from '@angular/forms';
import { Team } from './team.model';

export class TeamForm {
    name = new FormControl();
    players = new FormArray([]);

    constructor(team: Team) {
        if (team.name) {
            this.name.setValue(team.name);
        }

        if (team.players) {
            this.players.setValue([team.players]);
        }
    }
}