import { Component, OnInit } from '@angular/core';
import { MovieCastDataService } from '../services/movie-cast-data.service';
import { MoviedetailsService } from '../services/moviedetails.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movecastdata =  [];
  moviedetailsdata = [];
  moviename = [];
  movielanguage = [];


    constructor( private moviecostdata: MovieCastDataService, private Moviedetails: MoviedetailsService,  ) { }

    castdetails(data) {

      let namlenght = data.name.split(" ").join('-')
      window.location.href = 'https://www.themoviedb.org/person/' + data.id + namlenght

    }

    ngOnInit() {

      this.moviecostdata.fetchData().subscribe(
          (movivedata) => {this.movecastdata = movivedata.cast }
        )

        this.Moviedetails.fetchMovieData().subscribe(
            (Moviedetailsse) =>
            {
              this.moviedetailsdata = Moviedetailsse,
              this.moviename = Moviedetailsse.belongs_to_collection,
              this.movielanguage = Moviedetailsse.spoken_languages[0]

              }
          )

    }

}
