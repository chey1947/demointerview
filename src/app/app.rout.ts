import { NgModule }             from '@angular/core';
import {ModuleWithProviders}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {CardgameComponent} from './cardgame/cardgame.component';

export const approute: Routes = [

  {
    path: 'moviecast',
    component: MovieComponent
  },
  {
    path: 'cardgame',
    component: CardgameComponent
  },

  {
    path: '',
    redirectTo: '/moviecast',
    pathMatch: 'full'
  },




];

export const routes: ModuleWithProviders   =  RouterModule.forRoot(approute)
