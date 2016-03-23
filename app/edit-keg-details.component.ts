import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h5>Edit Name: {{ keg.name }}</h5>
    <input [(ngModel)]="keg.name" class="input-md keg-form">
    <h5>Edit Brand: {{ keg.brand }}</h5>
    <input [(ngModel)]="keg.brand" class="input-md keg-form">
    <h5>Edit Price: {{ keg.price }}</h5>
    <input [(ngModel)]="keg.price" class="input-md keg-form">
    <h5>Edit Alcohol Content: {{ keg.abv }}</h5>
    <input [(ngModel)]="keg.abv" class="input-md keg-form">
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
