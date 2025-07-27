import { Component, ViewChild } from '@angular/core';
import { IUsers } from '../../../client/modules/i-users';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgxSpinner } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(private _userService: UsersService) {

  }
  user: IUsers = {} as IUsers
  errorMessage:string='';
  addUser(form: NgForm) {
    if (form.valid   ) {
      this._userService.addNewUser(this.user).subscribe(
        (data) =>this.errorMessage='User added successfully');
        form.reset()
      }
    else{
      alert('ther is an error ')
    }
  }
}
