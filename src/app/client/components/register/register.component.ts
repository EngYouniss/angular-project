import { Component, inject, OnInit } from '@angular/core';
import { IUsers } from '../../modules/i-users';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private userService = inject(UsersService);

  form = this._formBuilder.group(
    {
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: ValidationService.mustMatch('password', 'confirmPassword'),
       updateOn: 'blur'
    },

  );

  ngOnInit(): void {
  this.newUser();
  }
  newUser(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();
    const userData: IUsers = {
      username: formValue.username!,
      email: formValue.email!,
      password: formValue.password!
    };

    this.userService.createNewUser(userData).subscribe(
      (data) => {
        if (data) {
          alert('Created successfully');
        } else {
          alert('Error');
        }
      }
    );
  }

  isInvalid(field: string, error: string) {
    const control = this.form.get(field);
    return control?.hasError(error) && control.touched;
  }
}
