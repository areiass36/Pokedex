export interface Pokemon {
  id:number,
  name:string,
  img:string,
  imgShiny:string,
  type:string[],
  dexEntry:string[],
  stats: Stat[],
  abilities: string[]
}

export interface Stat{
  name:string,
  value:number
}

