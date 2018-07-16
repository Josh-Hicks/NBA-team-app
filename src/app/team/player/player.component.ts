import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nba-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
