import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}<li>{{ keg.brand }}<li>$ {{ keg.price }}<li>{{ keg.abv }}%</h3>
  `
})
export class KegComponent {
  public keg: Keg;
}
