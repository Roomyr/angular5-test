import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-card-detail',
  templateUrl: './post-card-detail.component.html',
  styleUrls: ['./post-card-detail.component.css']
})
export class PostCardDetailComponent implements OnInit {

  card: any = {
    id: '',
    imgUrl: '',
    summary: '',
    assignees: '',
    rate: 0,
    postedBy: ''
  };
  constructor(private route: ActivatedRoute, private rest: RestService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.getCard(params.id);
    });
  }

  getCard(id: any) {
    this.rest.getOneCard(id).subscribe(res => {
      this.card = res[0];
      this.card.rate = this.card.rate + '';
    });
  }

  updateCard() {
    this.card.rate = +this.card.rate;
    this.rest.updateCard(this.card.id, this.card).subscribe();
    this.router.navigate(['']);
  }

  deleteCard() {
    this.rest.deleteCard(this.card.id).subscribe();
    this.router.navigate(['']);
  }

}
