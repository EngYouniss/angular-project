import { Component } from '@angular/core';
import { Iproducts } from '../../modules/iproducts';
import { CommonModule } from '@angular/common';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterOutlet,RouterLink],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class HomeComponent {
products:Iproducts[]=[
  {
    name:'Iphone',
    price: 1000,
    image: 'https://picsum.photos/200/300',
    description: 'High performance laptop with 16GB RAM and 512GB SSD.',
    category_id: 1
  }
  ,
  {
    name:'Samsung Galaxy S21 Ultra',
    price: 500,
    image: 'https://picsum.photos/200/300',
    description: 'Latest smartphone with advanced features and sleek design.',
    category_id: 1
  },
  {
    name:'tablet',
    price: 300,
    image: 'https://picsum.photos/200/300?random=2',
    description: 'Portable tablet with a vibrant display and long battery life.',
    category_id: 2

  },
  {
    name:'smartwatch',
    price: 200,
    image: 'https://picsum.photos/200/300?random=3',
    description: 'Smartwatch with fitness tracking and notification features.',
    category_id: 3
  }
]
categories=[
  {id:1,name:'Phones'},
  {id:2,name:'Tablets'},
  {id:3,name:'Smartwatches'},
  {id:4,name:'Laptops'},
];
today = new Date();           // للتذييل


}

