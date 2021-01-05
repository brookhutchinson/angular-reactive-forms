// forms
import { AbstractControl } from '@angular/forms';
import { ValidatorFn }     from '@angular/forms';

export class NumberValidators {
  static range(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
        // number is between min value and max value
        return { range: true };
      }

      return null;
    };
  }
}
