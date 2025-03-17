import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private presentation = `
  'Au Petit Village" est une entreprise spécialisée dans la confection de figurines inspirées de l’univers emblématique d’Astérix et Obélix. Passionnés par l’artisanat et l’héritage de la bande dessinée, nous recréons avec soin et précision les personnages mythiques de la célèbre saga gauloise.Notre collection s’adresse aux amateurs de bande dessinée, aux collectionneurs et aux nostalgiques âgés de 30 à 55 ans, qui ont grandi avec les aventures d’Astérix et ses compagnons. Chaque figurine est pensée pour raviver des souvenirs, célébrer l’humour et l’esprit indomptable de ces héros intemporels.Chez "Au Petit Village", nous mettons un point d’honneur à offrir des pièces de qualité, fidèles aux illustrations originales, alliant tradition et modernité pour faire revivre la magie de cet univers légendaire.'
`;

getPresentation(): string {
  return this.presentation;
}

}
