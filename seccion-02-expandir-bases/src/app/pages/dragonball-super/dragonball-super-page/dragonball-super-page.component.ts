import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../../components/dragonball/character-list/character-list.component";
import type { Character } from '../../../interfaces/character.interface';
import { CharacterAddComponent } from "../../../components/dragonball/character-add/character-add/character-add.component";
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  // /* Anteriormente, la dependencia se declaraba asi */
  // constructor(
  //   public dragonballService : DragonballService
  // ){}

  public dragonballService = inject(DragonballService);

}
