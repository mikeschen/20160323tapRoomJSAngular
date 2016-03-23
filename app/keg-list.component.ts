import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { LowPipe } from './total.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [LowPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="notLow">Show Full Kegs</option>
    <option value="low">Show Low Kegs</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | low:filterLow"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg([name, brand, price, abv]): void {
    this.kegList.push(
      new Keg(name, brand, price, abv, this.kegList.length, 0, false)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
    console.log(this.filterLow);
  }
}
