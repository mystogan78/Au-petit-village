import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { materialProviders } from './app/material';

bootstrapApplication(AppComponent, {
  
  providers: [provideRouter(routes), materialProviders,]
}).catch(err => console.error(err));
