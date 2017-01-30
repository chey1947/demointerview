import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.rout';
import { AppComponent } from './app.component';
import {MaterialModule } from '@angular/material';
import { MoviedetailsService } from './services/moviedetails.service';
import { MovieCastDataService } from './services/movie-cast-data.service';
import { CarddataService } from './services/carddata.service';
import 'hammerjs';
import { MovieComponent } from './movie/movie.component';
import { CardgameComponent } from './cardgame/cardgame.component';




@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CardgameComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    MaterialModule.forRoot(),

  ],
  providers: [MoviedetailsService, MovieCastDataService, CarddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
