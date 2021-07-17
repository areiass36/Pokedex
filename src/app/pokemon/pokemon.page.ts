import { PokemonService } from './../service/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  list: Pokemon[] = [];

  constructor(
    private pokemonService : PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(r => {
      this.list = r;
    })
  }
}
