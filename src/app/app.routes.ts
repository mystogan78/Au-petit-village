import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path : 'home', component: HomeComponent }, // ✅ Correspond à routerLink="/home"
    { path : 'about', component: AboutComponent }, // ✅ Correspond à routerLink="/about"
    { path : 'product', component: ProductComponent }, // ✅ Correspond à routerLink="/product"
    { path: '', redirectTo: '/home', pathMatch: 'full' } // ✅ Redirige bien vers /home
];
