import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { PresentationService } from '../services/presentation.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SortByPricePipe } from '../pipes/sort-by-price.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, SortByPricePipe, FormsModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Accueil';
 
  products: Product[] = [];
  cartProducts: Product[] = [];
  sortOrder: string = 'asc'; 
  presentationText: string = '';

  constructor(
    private productService: ProductService,
    private presentationService: PresentationService
  ) {}

  ngOnInit(): void {
    this.presentationText = this.presentationService.getPresentation();
    this.productService.filteredProducts$.subscribe((products: Product[]) => {
      this.products = products;
      console.log('Produits filtrés :', this.products);
    });
  }

  addProductToService(product: Product): void {
    this.productService.addProduct(product);
    alert(`${product.name} a été ajouté à la page produit !`);
  }

  searchProducts(term: string): void {
    this.productService.filterProducts(term).subscribe((filteredProducts: Product[]) => {
      this.products = filteredProducts;
    });
  }
}
