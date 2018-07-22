import { FormControl } from '@angular/forms'

export class PlayerForm {
  firstName = new FormControl();
  lastName = new FormControl();
  position = new FormControl();
  number = new FormControl();

  constructor(
    firstName: string = '',
    lastName: string = '',
    position: string = '',
    number: number | undefined = undefined
  ) {
    this.firstName.setValue(firstName);
    this.lastName.setValue(lastName);
    this.position.setValue(position);
    this.number.setValue(number);
  }
}
