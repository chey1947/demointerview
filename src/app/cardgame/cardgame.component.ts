import { Component, OnInit, Input } from '@angular/core';
import {CarddataService} from '../services/carddata.service';

@Component({
  selector: 'app-cardgame',
  templateUrl: './cardgame.component.html',
  styleUrls: ['./cardgame.component.css']
})
export class CardgameComponent implements OnInit {


    drawacarddealer = [];
    drawacarduser = [];
    showcard: boolean = false;
    showuser: boolean = false;
    resulst = '';

    showCardFunc(){
      this.showcard = true;
      this.showuser = false;
    }

    tryAgain() {


      this.cardData.fetchData().subscribe(
      (caradatas) => {
        this.drawacarddealer = caradatas.cards[0],
        this.drawacarduser = caradatas.cards[1],
        this.showuser = true;
        this.resulst = '';
        this.showcard = false;
       });






    }

    constructor(private cardData: CarddataService  ) { }

    higher(dealer, user){
      let dealVal =  this.cardData.stringtToNum(dealer);
      let userVal =  this.cardData.stringtToNum(user);

      if (dealer ===  user) {

        this.cardData.fetchData().subscribe(
        (caradatas) => {this.drawacarddealer = caradatas.cards[0], this.drawacarduser = caradatas.cards[1] } )

      }

      else if (userVal  > dealVal ) {

        this.resulst = 'You Win!';
        this.showCardFunc();

      }

      else {

        this.resulst = 'Better Luck Next Time';

        this.showCardFunc();
      }

    };

    lower(dealer, user){
      let dealVal =  this.cardData.stringtToNum(dealer);
      let userVal =  this.cardData.stringtToNum(user);

      if (dealer ===  user) {

        this.cardData.fetchData().subscribe(
        (caradatas) => {this.drawacarddealer = caradatas.cards[0], this.drawacarduser = caradatas.cards[1] } )

      }

      else if (userVal  < dealVal ) {

        this.resulst = 'You Win!';
        this.showCardFunc();

      }
      else {

        this.resulst = 'Better Luck Next Time'
        this.showCardFunc();

      };


    };

    ngOnInit() {

      this.cardData.fetchData().subscribe(

        (caradatas) => {this.drawacarddealer = caradatas.cards[0], this.drawacarduser = caradatas.cards[1],   this.showuser = true; }

      )

    }

}
