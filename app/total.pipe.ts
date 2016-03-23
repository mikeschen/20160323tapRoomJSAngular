import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "low",
  pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var low = args[0];
    console.log(args[0]);
    if(low === "low") {
      return input.filter((keg) => {
        return keg.low;
      });
    } else if (low === "notLow") {
      return input.filter((keg) => {
        return !keg.low;
      });
    } else {
        return input;
      }
    }
  }
