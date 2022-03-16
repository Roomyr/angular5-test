import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private rest: RestService) { }

  cards: any = [];
  allCards: any = [];
  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.rest.getCards().subscribe(res => {
      this.allCards = res;
      console.log(this.allCards[0])
      this.cards.push(this.allCards[0]);
    });
  }

  onScroll() {
    // console.log('scrolled!!');
    if (this.cards.length >= this.allCards.length) {
      console.log('end of posts');
    } else {
      this.allCards.forEach((card: any) => {
        if (this.cards.includes(card)) {
        } else {
          this.cards.push(card);
        }
      });
      // this.cards.push(this.allCards[1]);
    }
  }

}
