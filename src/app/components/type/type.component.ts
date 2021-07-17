import { Pokemon } from './../../models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {

  @Input("pokemon") pokemon : Pokemon;

  constructor() { }

  ngOnInit() {}

  getCssClass(typeName:string){
    return {[typeName]:true}
  }

}
