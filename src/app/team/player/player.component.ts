import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nba-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {
  @Input() playerForm: FormGroup;
  @Input() index: number;
  @Output() deletePlayer: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  delete() {
    this.deletePlayer.emit(this.index);
  }

}
