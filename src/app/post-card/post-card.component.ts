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
  constructor(private route: ActivatedRoute, private rest: RestService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.getCard(params.id);
    });
  }

  getCard(id: any) {
    this.rest.getOneCard(id).subscribe(res => {
      console.log('getting one card', res);
    });
  }

  addCard() {
    this.card.rate = +this.card.rate;
    console.log(this.card);
    this.rest.postCard(this.card).subscribe();
    this.router.navigate(['']);
  }

}
