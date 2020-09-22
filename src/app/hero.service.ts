import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Hero} from './hero';

const apiURL = 'http://localhost:3000/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch hero list
  getHeroes(): Observable<any> {
    return this.http.get(apiURL);
  }

  // HttpClient API post() method => Create hero
  addHero(heroName: string): Observable<any> {
    const data = {
      name: heroName
    };
    return this.http.post(apiURL, data, this.httpOptions);
  }

  // HttpClient API get() method => Fetch hero
  getHero(id: number): Observable<any> {
    return this.http.get(`${apiURL}/${id}`);
  }

  // HttpClient API put() method => Update hero
  updateHero(id, data): Observable<any> {
    return this.http.put(`${apiURL}/${id}`, data);
  }

  // HttpClient API delete() method => Delete hero
  deleteHero(hero: Hero | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
