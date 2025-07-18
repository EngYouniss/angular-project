import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../modules/i-users';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: IUsers[] = [] as IUsers[];
  constructor(private _usersService: UsersService) {


  }

  ngOnInit(): void {
 this.loadUsers();
  }
 private loadUsers():void
  {
    this._usersService.getAllUsers().subscribe({
      next:(data)=>this.users=data,
      error:(err)=>console.log(err)
    })
    console.log(this.users);
  }
}
