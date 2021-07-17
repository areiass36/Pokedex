import { PokemonService } from './../../service/pokemon.service';
import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  pokemon:Pokemon;

  constructor(
    private currentRoute: ActivatedRoute,
    private router : Router,
    private pokemonService : PokemonService
  ) { }

  ngOnInit() {
    const id = this.currentRoute.params.subscribe(r => {
      this.pokemonService.getPokemon(r.id).subscribe(r => {
        this.pokemon = r;
        console.log(r);
      })
    })

  }

}
