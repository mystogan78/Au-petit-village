import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produit-detail',
  standalone: true, // Utilisation de composants autonomes
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css'],
  imports: [CommonModule] // Importation de CommonModule pour utiliser *ngIf
})
export class ProduitDetailComponent implements OnInit {
  produit: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location : Location
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      // Vérifions si la méthode `getProductByName` existe dans le service
      const product = this.productService.getProductByName(name);
      if (product) {
        this.produit = product;
      } else {
        console.error(`Produit avec le nom "${name}" non trouvé.`);
      }
    }
  }
  addProductToService(product: Product): void {
    this.productService.addProduct(product);
    alert(`${product.name} a été ajouté au panier depuis la page de détails !`);
  }
  goBack(): void {
    this.location.back();
  }
  
  


}
