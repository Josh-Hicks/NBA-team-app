import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { TeamForm } from './_models';

@Injectable()
export class TeamFormService {
    private teamForm: BehaviorSubject<FormGroup | undefined> = new BehaviorSubject(undefined);
    teamForm$: Observable<FormGroup> = this.teamForm.asObservable();

    constructor(private fb: FormBuilder) { }

    createTeamForm() {
        this.teamForm.next(this.fb.group({
            name: ['', [Validators.required]],
            coaches: new FormArray([], Validators.required),
            players: new FormArray([], Validators.required)
        }))
    }
}