import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = "Au Petit Village";
  
  logo = "assets/images/au-petit-village.png";
  isFlex = true; // Active ou désactive le display flex
}
