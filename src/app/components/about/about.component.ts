import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Allproduct } from '../../allproduct';
import { CommonModule } from '@angular/common';
import { Product } from '../../modules/products';
import { HoverEffectDirective } from '../../directives/hover-effect.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HoverEffectDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  @Input() products!: Product[];
  @Output() deleteProduct=new EventEmitter<number>();
  DeleteProduct(id: number) {
    this.deleteProduct.emit(id);
  }

}
