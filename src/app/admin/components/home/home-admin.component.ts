import { Component } from '@angular/core';
import { AddProductComponent } from "../products/add-product/add-product.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddProductComponent, RouterModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent {

}
