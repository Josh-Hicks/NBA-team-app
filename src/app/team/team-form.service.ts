import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { TeamForm } from './_models'
import { PlayerForm } from './player'

@Injectable()
export class TeamFormService {
  private teamForm: BehaviorSubject<
    FormGroup | undefined
  > = new BehaviorSubject(this.fb.group(new TeamForm('Lakers')))
  teamForm$: Observable<FormGroup> = this.teamForm.asObservable()

  constructor(private fb: FormBuilder) {}

  addPlayer() {
    const currentTeam = this.teamForm.getValue()
    const currentPlayers = currentTeam.get('players') as FormArray

    currentPlayers.push(this.fb.group(new PlayerForm()))

    this.teamForm.next(currentTeam)
  }

  deletePlayer(i: number) {
    const currentTeam = this.teamForm.getValue()
    const currentPlayers = currentTeam.get('players') as FormArray

    currentPlayers.removeAt(i)

    this.teamForm.next(currentTeam)  
  }
}
