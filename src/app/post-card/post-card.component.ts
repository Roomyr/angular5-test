import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  card: any = {
    imgUrl: '',
    summary: '',
    assignees: '',
    rate: 0,
    postedBy: ''
  };
  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
  }

  addCard() {
    this.card.rate = +this.card.rate;
    console.log(this.card);
    this.rest.postCard(this.card).subscribe();
    this.router.navigate(['']);
  }

}
