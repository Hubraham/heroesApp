import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe/interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[]=[];


  heroeSelect: Heroe | undefined;

  constructor( private HeroesService: HeroesService ) { }

  ngOnInit(): void {

    
  }


  buscando(){

    this.HeroesService.getSugerencias(this.termino.trim())
    .subscribe(heroes =>this.heroes =heroes);
  }

  opcionSeleccionada(event : MatAutocompleteSelectedEvent){

    if (!event.option.value) {
      this.heroeSelect = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.HeroesService.GetHeroePorId(heroe.id!)
    .subscribe( heroe => this.heroeSelect = heroe)

  }

}
