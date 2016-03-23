export class Keg {
  constructor(public name: string, public brand: string, public price: number, public abv: number, public id: number, public total: number, public low: boolean) {
    this.total = 12;
    this.low = false;
  }
}
