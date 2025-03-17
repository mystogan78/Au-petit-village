import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './product/produit.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProduitComponent },
  { path: 'produit/:name', component: ProduitDetailComponent },  // Vérifie cette ligne
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },  // Redirection par défaut
];
