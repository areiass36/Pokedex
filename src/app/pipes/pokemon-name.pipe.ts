import { Pokemon } from './../models/pokemon.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  transform(list:Pokemon[],name:string):Pokemon[] {
    if(name!=null && !name.match(/^ *$/)){
      return list.filter(e => e.name.toLocaleUpperCase().includes(name.toLocaleUpperCase()));
    }
    return list;
  }

}
