import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(input, weight: string) {
    var output = [];
    if(weight === "250") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].weightClass === "250") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(weight === "500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].weightClass === "500") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(weight === "750") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].weightClass === "750") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }

}
