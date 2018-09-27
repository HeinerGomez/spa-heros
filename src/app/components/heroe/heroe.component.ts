import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
      this.activatedRoute.params.subscribe( params => {
        this.heroe = this._heroesService.getHero(params['id']);
        if (this.heroe.casa === 'Marvel') {
          this.heroe['esDC'] = false;
          this.heroe['esMV'] = true;
        } else {
          this.heroe['esDC'] = true;
          this.heroe['esMV'] = false;
        }
      });
  }
}
