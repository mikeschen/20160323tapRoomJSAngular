import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent  } from './keg-list.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}<li>{{ keg.brand }}<li>$ {{ keg.price }}<li>{{ keg.abv }}%<li>Pints Left: {{ keg.total }}</h3>
    <button (click)="decreaseTotal(keg)">Sell Pint</button>
  `
})
export class KegComponent {
  decreaseTotal(keg) {
    keg.total-=1;
    console.log(keg.total);
    if (keg.total > 10) {
      keg.low = false;
    } else {
      keg.low = true;
    }
  }
}
