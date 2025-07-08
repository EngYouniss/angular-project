import { Component } from '@angular/core';
import { LoginComponentComponent } from "./login-component/login-component.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LoginComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project-angolar';
  
}
