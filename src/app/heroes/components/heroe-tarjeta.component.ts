import { Component, Input } from '@angular/core';
import { Heroe } from '../pages/heroe/interfaces/hero.interface';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mt-card{
    margin-top: 20px
  }
`]
})
export class HeroeTarjetaComponent  {

  @Input() heroe!: Heroe;


}
