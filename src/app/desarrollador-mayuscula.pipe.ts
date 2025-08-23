import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
  standalone: true
})
export class DesarrolladorMayusculaPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    return value.toString().toUpperCase();
  }

}
