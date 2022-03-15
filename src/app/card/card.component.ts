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
  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.rest.getCards().subscribe(res => {
      this.cards = res;
    });
  }

}
