import { importProvidersFrom } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

export const materialProviders = importProvidersFrom(
  MatGridListModule,
  MatCardModule
);
