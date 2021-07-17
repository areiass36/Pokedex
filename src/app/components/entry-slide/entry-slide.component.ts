import { Pokemon } from './../../models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-slide',
  templateUrl: './entry-slide.component.html',
  styleUrls: ['./entry-slide.component.scss'],
})
export class EntrySlideComponent implements OnInit {

  @Input() pokemon : Pokemon;

  constructor() { }

  ngOnInit() {}

}
