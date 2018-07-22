import { FormArray, FormControl } from '@angular/forms';

export class TeamForm {
    name = new FormControl();
    players = new FormArray([]);

    constructor(name?: string, players?: FormArray) {
        if (name) {
            this.name.setValue(name);
        }

        if (players) {
            this.players.setValue([players]);
        }
    }
}