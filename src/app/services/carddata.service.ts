import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CarddataService {

  constructor(private http: Http) { }

  stringtToNum(value){

    let currectValue =  ((value === 'JACK') ? 11 : (value === 'QUEEN') ? 13 : (value === 'KING') ? 13: (value === 'ACE') ?  14 : parseInt(value));
    return currectValue


  }

  fetchData () {
  return this.http.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2').map(
    (res) => res.json()
  )

  }

}
