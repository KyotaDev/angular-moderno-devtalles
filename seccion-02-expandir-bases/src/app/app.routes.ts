import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
