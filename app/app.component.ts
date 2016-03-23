import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Taproom App!</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg [];
  constructor() {
    this.kegs = [
      new Keg("Dead Guy", "Rogue", 5, 6, 0, 0),
      new Keg("Chairlift", "Deschutes", 5, 5, 1, 0),
      new Keg("Lager", "Pabst", 2, 4, 2, 0),
      new Keg("Pale Ale", "Sierra Nevada", 4, 5, 3, 0)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
