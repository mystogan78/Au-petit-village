import { Component,OnInit } from '@angular/core';
import { PresentationService } from '../services/presentation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit {
 title = 'A propos'
  
 image = 'assets/images/figurines.png'
 presentationText: string = '';
 constructor (
  private presentationService : PresentationService
 ) { }
 ngOnInit(): void {
  this.presentationText = this.presentationService.getPresentation();
   
 }


}
