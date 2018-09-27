import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  public brayan: string;
  constructor(private _heroesService: HeroesService,
              private router: Router) {

    this.brayan = '';
  }

  verHeroe(idx: number) {
    this.router.navigate(['heroe', idx]);
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

}
