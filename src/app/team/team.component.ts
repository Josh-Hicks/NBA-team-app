import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TeamFormService } from './team-form.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'nba-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamForm: FormGroup;
  teamFormSub: Subscription;

  constructor(private teamFormService: TeamFormService) { }

  ngOnInit() {
    this.teamFormService.createTeamForm();

    this.teamFormSub = this.teamFormService.teamForm$
      .subscribe(team => {
          this.teamForm = team;
          console.log(team)
        })
  }

  // private createTeamForm() {
  //   this.teamForm = this.fb.group({
  //     name: ['Cavaliers', []],
  //     coaches: [new FormArray([])],
  //     players: this.fb.array([])
  //   });
  //}
}

