import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Edit Name: {{ keg.name }}</h3>
    <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form">
    <h3>Edit Brand: {{ keg.brand }}</h3>
    <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form">
    <h3>Edit Price: {{ keg.price }}</h3>
    <input [(ngModel)]="keg.price" class="col-sm-8 input-lg keg-form">
    <h3>Edit Alcohol Content: {{ keg.abv }}</h3>
    <input [(ngModel)]="keg.abv" class="col-sm-8 input-lg keg-form">
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
