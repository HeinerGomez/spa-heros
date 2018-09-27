import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html'
})
export class HeroesSearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _heroresServices: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
              }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroresServices.buscarHeroes(this.termino);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['heroe', idx]);
  }

}
