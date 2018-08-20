import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { TeamForm, Team } from './_models'
import { PlayerForm, Player } from './player'

@Injectable()
export class TeamFormService {
  private teamForm: BehaviorSubject<
    FormGroup | undefined
  > = new BehaviorSubject(this.fb.group(new TeamForm(new Team('Cavaliers'))))
  teamForm$: Observable<FormGroup> = this.teamForm.asObservable()

  constructor(private fb: FormBuilder) {}

  addPlayer() {
    const currentTeam = this.teamForm.getValue()
    const currentPlayers = currentTeam.get('players') as FormArray

    currentPlayers.push(
      this.fb.group(
        new PlayerForm(new Player())
      )
    )

    this.teamForm.next(currentTeam)
  }

  deletePlayer(i: number) {
    const currentTeam = this.teamForm.getValue()
    const currentPlayers = currentTeam.get('players') as FormArray

    currentPlayers.removeAt(i)

    this.teamForm.next(currentTeam)
  }
}
