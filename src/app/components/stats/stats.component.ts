import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {

  @Input("pokemon") pokemon : Pokemon;

  constructor() { }

  ngOnInit() {}

}
