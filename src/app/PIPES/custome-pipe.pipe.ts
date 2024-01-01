import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipe'
})
export class CustomePipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value*x;
  }

}
