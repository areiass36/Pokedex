import { PokemonNamePipe } from './../pipes/pokemon-name.pipe';
import { PokemonPage } from './pokemon.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
  ],
  declarations: [PokemonPage,PokemonNamePipe]
})
export class PokemonPageModule {}
