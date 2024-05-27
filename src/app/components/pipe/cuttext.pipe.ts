import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuttext',
})
export class CuttextPipe implements PipeTransform {
  transform(Title: string): string {
    return Title.split(' ').slice(0, 2).join(' ');
  }
}
