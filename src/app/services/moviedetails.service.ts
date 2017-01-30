import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MoviedetailsService {

    constructor(private http: Http) { }

    fetchMovieData () {
    return this.http.get('https://api.themoviedb.org/3/movie/127380?api_key=83c21bf622cd48fbfe9d16c1fe204e92&language=en-US').map(
      (res) => res.json()
    )

    }

}
