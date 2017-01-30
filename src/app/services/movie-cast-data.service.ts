import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MovieCastDataService {

  constructor(private http: Http) { }

  fetchData () {
  return this.http.get('https://api.themoviedb.org/3/movie/127380/credits?api_key=83c21bf622cd48fbfe9d16c1fe204e92').map(
    (res) => res.json()
  )

  }
  

}
