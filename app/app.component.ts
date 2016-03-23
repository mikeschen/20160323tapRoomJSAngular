import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Taproom App!</h1>
    </div>
  `
})

export class AppComponent {

}

export class Keg {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
