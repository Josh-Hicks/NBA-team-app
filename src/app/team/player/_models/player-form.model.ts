import { FormControl, Validators } from '@angular/forms'
import { Player } from './player.model'

export class PlayerForm {
  firstName = new FormControl()
  lastName = new FormControl()
  position = new FormControl()
  number = new FormControl()

  constructor(
    player: Player
  ) {
    this.firstName.setValue(player.firstName)
    this.firstName.setValidators([Validators.required])

    this.lastName.setValue(player.lastName)

    this.position.setValue(player.position)

    this.number.setValue(player.number)
    this.number.setValidators([Validators.required])
  }
}
