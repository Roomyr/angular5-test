import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-card-detail',
  templateUrl: './post-card-detail.component.html',
  styleUrls: ['./post-card-detail.component.css']
})
export class PostCardDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rest: RestService) { }

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

}
