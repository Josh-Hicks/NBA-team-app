import { FormArray, FormControl } from '@angular/forms';

export class TeamForm {
    name: FormControl;
    coaches: FormArray;
    players: FormArray;

    constructor(name: FormControl = new FormControl(), coaches: FormArray = new FormArray([]), players: FormArray = new FormArray([])) {
        name
        coaches
        players
    }
}