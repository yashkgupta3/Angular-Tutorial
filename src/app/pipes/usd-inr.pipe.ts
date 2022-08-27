// please note this directory is not a component, it just a pipe
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    // const[x]=args;
    var x:number[] = args
    return value*x[0];
  }

}
