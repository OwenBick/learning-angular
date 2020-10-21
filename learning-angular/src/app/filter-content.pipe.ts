import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {
  transform(games: Content[], genre: string ): Content[] {
    return games.filter(c => c.type === genre);
  }
}
