import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, MatGridListModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Au-petit-village';
  gridCols: number = 3;
  cards = [
    { title: 'Carte 1' },
    { title: 'Carte 2' },
    { title: 'Carte 3' },
    { title: 'Carte 4' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.onResize(); // ✅ Appeler seulement si c'est le navigateur
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    if (isPlatformBrowser(this.platformId)) { // ✅ Vérifier si on est bien côté client
      const width = window.innerWidth;
      this.gridCols = width < 600 ? 1 : width < 900 ? 2 : 3;
    }
  }
}
