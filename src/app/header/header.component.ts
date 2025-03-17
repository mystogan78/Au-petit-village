import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [FormsModule, RouterLink],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Au village';
  logo = 'assets/images/au-petit-village.png';
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.productService.filterProducts(this.searchTerm);
    } else {
      this.productService.resetFilter();
    }
  }
  
  
}
