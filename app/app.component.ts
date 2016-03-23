import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Taproom App!</h1>
      <ul>
      <h3 *ngFor="#keg of kegs">{{ keg.name }}<h4><li>{{ keg.brand }}<li>$ {{ keg.price }}<li>{{ keg.abv }}%</h4></h3>
      </ul>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg [];
  constructor() {
    this.kegs = [
      new Keg("Dead Guy", "Rogue", 5, 6, 0),
      new Keg("Chairlift", "Deschutes", 5, 5, 1),
      new Keg("Lager", "Pabst", 2, 4, 2),
      new Keg("Pale Ale", "Sierra Nevada", 4, 5, 3)
    ];
  }
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public abv: number, public id: number) {

  }
}
