import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

 static mustMatch(controlName: string, controlNameConfirm: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const controlConfirm = formGroup.get(controlNameConfirm);

    if (!control || !controlConfirm) {
      return null;
    }

    if (controlConfirm.errors && !controlConfirm.errors['mustMatch']) {
      return null; // لا تكتب على أخطاء موجودة من Validator آخر
    }

    if (control.value !== controlConfirm.value) {
      controlConfirm.setErrors({ mustMatch: true });
    } else {
      controlConfirm.setErrors(null);
    }

    return null;
  };
}


}
