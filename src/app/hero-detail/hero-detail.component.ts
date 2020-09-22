import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  //
  // save(): void {
  //   this.heroService.updateHero(this.hero);
  // }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const data = {
      name: this.hero.name
    };

    this.heroService.updateHero(this.hero.id, data)
      .subscribe(
      () => this.goBack(),
        response => {
          console.log(response);
        });
  }

}
