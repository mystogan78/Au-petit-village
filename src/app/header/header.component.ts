import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // Angular 15+ sans modules
  imports: [RouterLink, RouterLinkActive ], // Importation nécessaire pour ngStyle
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  @Input() title = 'Mon site';

 
}
