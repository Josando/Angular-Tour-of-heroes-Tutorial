import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  hero: Hero = {
    name: 'Windstorm',
    id: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
