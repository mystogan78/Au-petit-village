import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() description = 'mon site est un site web de démonstration';
  @Input() copyriht = '2025 Mon Site. Tous droits réservés.';
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  search(): void {
    const filteredProducts = this.productService.filterProducts(this.searchTerm);
    console.log('Produits filtrés :', filteredProducts);
  }

}
