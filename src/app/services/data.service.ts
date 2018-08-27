import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private _httpClient: HttpClient ) { }

  gimmeJokes(){
  	return this._httpClient.get('https://api.chucknorris.io/jokes/random');
  }
}
