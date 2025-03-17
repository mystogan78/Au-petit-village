import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  imports :[CommonModule],
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  title ='Produits ajoutés'
  description = 'Gérez les produits ajoutés'
  addedProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Récupérer les produits ajoutés depuis le service
    this.productService.getAddedProducts().subscribe((products: Product[]) => {
      this.addedProducts = products;
      console.log('Produits ajoutés récupérés :', this.addedProducts);
    });
  }

  removeProduct(productName: string): void {
    this.productService.removeAddedProduct(productName);
    this.addedProducts = this.addedProducts.filter(product => product.name !== productName);
  }
}
