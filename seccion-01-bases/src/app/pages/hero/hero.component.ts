import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  imports: [ UpperCasePipe ]
})

export class HeroComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(()=>{
    return `${ this.name().toUpperCase() }`
  });

  getHeroDescription() : string {
    return `${ this.name() } - ${ this.age() }`
  }

  changeHero() : void {
    this.name.update((v) => v = 'Spiderman');
    this.age.update((v) => v = 22);
  }

  changeAge() : void {
    this.age.update((v) => v = 60);
  }

  reset() : void {
    this.name.update((v) => v = 'Ironman');
    this.age.update((v) => v = 45);
  }
}
