import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Produits par défaut
  private products: Product[] = [
    { name: 'Asterix gaulois', price: 10, category: 'figurines', description: 'Figurine du personnage mythique Astérix le gaulois', image: '/assets/images/Figurine1.png' },
    { name: 'Asterix et Obélix', price: 23, category: 'figurines', description: 'Figurine d\'Astérix et Obélix déguisés en soldats romains', image: '/assets/images/Figurine4.png' },
    { name: 'Chevalier', price: 32, category: 'figurines', description: 'Figurine d\'un chevalier en armure avec sa monture', image: '/assets/images/Figurine3.png' },
    { name: 'Soldat', price: 27, category: 'figurines', description: 'Figurine d\'un soldat romain avec bouclier', image: '/assets/images/Figurine2.png' },
    { name: 'Asterix et Obélix 2', price: 35, category: 'figurines', description: 'Figurine d\'Astérix et Obélix les Gaulois', image: '/assets/images/Figurine5.png' },
    { name: 'Soldat romain', price: 15, category: 'figurines', description: 'Figurine d\'un soldat romain', image: '/assets/images/Figurine6.png' },
  ];

  // ✅ Pour la gestion des produits filtrés
  private filteredProductsSubject = new BehaviorSubject<Product[]>(this.products);
  filteredProducts$ = this.filteredProductsSubject.asObservable();

  // ✅ Pour la gestion des produits ajoutés par l'utilisateur
  private addedProducts: Product[] = [];
  private addedProductsSubject = new BehaviorSubject<Product[]>([]);
  addedProducts$ = this.addedProductsSubject.asObservable();

  // ✅ Pour la gestion du panier
  private cartProducts: Product[] = [];
  private cartProductsSubject = new BehaviorSubject<Product[]>([]);
  cartProducts$ = this.cartProductsSubject.asObservable();

  constructor() {}

  // ✅ Récupérer tous les produits (incluant les produits ajoutés)
  getProducts(): Observable<Product[]> {
    // Retourner l'Observable des produits directement
    return this.filteredProducts$;
  }

  addProduct(product: Product): void {
    console.log('Ajout du produit :', product); // Vérification
    if (!this.addedProducts.find(p => p.name === product.name)) {
      this.addedProducts.push(product);
      this.addedProductsSubject.next([...this.addedProducts]);
      console.log('Liste des produits ajoutés après ajout :', this.addedProducts); // Vérification
    }
  }
  

// ✅ Récupérer tous les produits ajoutés
getAddedProducts(): Observable<Product[]> {
  return this.addedProductsSubject.asObservable();
}

// ✅ Supprimer un produit
// ✅ Supprimer un produit ajouté
removeAddedProduct(productName: string): void {
  this.addedProducts = this.addedProducts.filter(product => product.name !== productName);
  this.addedProductsSubject.next([...this.addedProducts]);
}


// Méthode pour filtrer les produits (mise à jour via BehaviorSubject)
filterProducts(term: string): Observable<Product[]> {
  const filtered = this.products.filter(product =>
    product.name.toLowerCase().includes(term.toLowerCase()) ||
    product.description.toLowerCase().includes(term.toLowerCase())
  );
  this.filteredProductsSubject.next(filtered);
  return this.filteredProducts$; // Retourner l'observable ici
}


  // ✅ Réinitialiser le filtre (afficher tous les produits)
  resetFilter(): void {
    const allProducts = [...this.products, ...this.addedProducts];
    this.filteredProductsSubject.next(allProducts);
  }



  // ✅ Récupérer un produit par son nom
  getProductByName(name: string): Product | undefined {
    return [...this.products, ...this.addedProducts].find(product => product.name === name);
  }
  // Méthode pour récupérer les produits ajoutés

  }
  

