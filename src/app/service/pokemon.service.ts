
import { HttpClient } from '@angular/common/http';
import { Pokemon, Stat } from './../models/pokemon.model';
import { PokemonPage } from './../pokemon/pokemon.page';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonInfo = "https://pokeapi.co/api/v2/pokemon/:id";;
  specieInfo = "https://pokeapi.co/api/v2/pokemon-species/:id"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPokemonList(): Observable<Pokemon[]> {
    const list: Pokemon[] = [];
    return new Observable(o => {
      for (let i = 1; i <= 151; i++) {
        this.getPokemon(i).subscribe(r => {
          list.push(r);
          list.sort((a, b) => a.id - b.id);
        })
      }
      o.next(list);
    });

  }

  public getPokemon(id: number): Observable<Pokemon> {
    return new Observable(o => {
      this.httpClient.get(this.pokemonInfo.replace(":id", <any>id)).subscribe((p: any) => {
        this.getSpecieInfo(id).subscribe((s:any) => {
          o.next(this.requestHandler(p,s));
        });
      });
    });
  }

  private getSpecieInfo(id:number):Observable<Pokemon>{
    return new Observable(o => {
      this.httpClient.get(this.specieInfo.replace(":id",<any>id)).subscribe((r:any) => {
        o.next(r);
      })
    })
  }

  private requestHandler(pokemonInfo: any,specieInfo:any): Pokemon {
    return {
      id: pokemonInfo.id,
      name: this.convertName(specieInfo.name),
      img: pokemonInfo["sprites"]["versions"]["generation-iii"]["firered-leafgreen"]["front_default"],
      imgShiny: pokemonInfo["sprites"]["versions"]["generation-iii"]["firered-leafgreen"]["front_shiny"],
      type: this.typeHandler(pokemonInfo.types),
      dexEntry:this.dexEntryHandler(specieInfo),
      stats:this.statsHandler(pokemonInfo.stats),
      abilities:this.abilityHandler(pokemonInfo.abilities)
    }
  }

  private abilityHandler(pokemonInfo: any[]):string[]{
    const abilities:string[] = [];
    pokemonInfo.forEach(e => {
      if(!e.is_hidden)
        abilities.push(e['ability']['name']);
    })
    return abilities;
  }

  private statsHandler(statsInfo:any[]):Stat[]{
    const stats:Stat[] = [];
    statsInfo.forEach(e => {
      stats.push({
        name:e.stat.name.toUpperCase(),
        value:e["base_stat"]
      });
    })
    return stats;
  }

  private typeHandler(arr:any[]):string[]{
    const types: string[] = [];
    arr.forEach(e => {
      types.push(e.type.name.toUpperCase());
    });
    return types;
  }

  private dexEntryHandler(specieInfo:any):string[]{
    const entry:string[] = [];
    entry.push(specieInfo["flavor_text_entries"][9]["flavor_text"])
    entry.push(specieInfo["flavor_text_entries"][10]["flavor_text"])
    return entry;
  }

  private convertName(name: string): string {
    return name[0].toUpperCase() + name.slice(1);
  }

}
