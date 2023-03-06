import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../heroe/interfaces/hero.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  Heroes : Heroe[]= [];
  
  constructor( private HeroesService : HeroesService) { }

  ngOnInit(): void {

    this.HeroesService.getHeroes()
    .subscribe( heroes => this.Heroes = heroes );
  }

}
