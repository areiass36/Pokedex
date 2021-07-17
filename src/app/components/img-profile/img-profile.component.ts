import { Pokemon } from './../../models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-img-profile',
  templateUrl: './img-profile.component.html',
  styleUrls: ['./img-profile.component.scss'],
})
export class ImgProfileComponent implements OnInit {

  @Input("pokemon") pokemon : Pokemon;
  image : string = "";

  constructor() { }

  ngOnInit() {
      this.image = this.pokemon.img;
  }

  onChangeImage(){
    this.image = this.image == this.pokemon.img ? this.pokemon.imgShiny : this.pokemon.img;
  }

}
