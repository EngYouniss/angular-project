import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent {
  Name: string = "Younis";
  Color: string = "blue";
  public getName(last:string='') {
    return this.Name + " " + last;
  }
}
