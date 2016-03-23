// import { Pipe, PipeTransform } from 'angular2/core';
// import { Keg } from './keg.model';
//
// @Pipe ({
//   name: "low",
//   pure: false
// })
// export class LowPipe implements PipeTransform {
//   transform(input: Keg[], args) {
//     var pintsLeft = args[0];
//     if(pintsLeft === "low") {
//       return input.filter((keg) => {
//         return keg.low;
//       });
//     } else if (pintsLeft === "notLow") {
//       return input.filter((keg) => {
//         return !keg.low;
//       });
//     } else {
//         return input;
//       }
//     }
//   }
