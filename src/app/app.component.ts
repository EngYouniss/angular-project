import { Component, Input } from '@angular/core';
import { NavbarComponent } from "./client/layout/components/navbar/navbar.component";
import { FooterComponent } from "./client/layout/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project-angolar';
}
