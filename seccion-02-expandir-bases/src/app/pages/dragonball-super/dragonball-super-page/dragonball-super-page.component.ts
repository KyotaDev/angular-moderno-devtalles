import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../../components/dragonball/character-list/character-list.component";
import type { Character } from '../../../interfaces/character.interface';
import { CharacterAddComponent } from "../../../components/dragonball/character-add/character-add/character-add.component";

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

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000}
  ]);

  addCharacter(character : Character) {
    this.characters.update(list => [...list, character]);
  }

  // powerClasses = computed( () => {
  //   return {
  //     'text-danger' : true,
  //   }
  // });
}
