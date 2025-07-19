import { Component } from '@angular/core';
import { NavbarComponent } from "../../../admin/layout/components/navbar/navbar.component";
import { FooterComponent } from "../../../admin/layout/components/footer/footer.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SidebarComponent, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
