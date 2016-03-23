import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>New Keg</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Abv" class="col-sm-8 input-lg" #newAbv>
    <button (click)="addKeg(newName, newBrand, newPrice, newAbv)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAbv: HTMLInputElement){
    this.onSubmitNewKeg.emit([userName.value, userBrand.value, userPrice.value, userAbv.value]);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAbv.value = "";
  }
}
