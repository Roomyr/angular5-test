import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  public getCards() {
    return this.http.get('http://localhost:3000/card');
  }

  public getOneCard(id: any) {
    return this.http.get(`http://localhost:3000/card/${id}`);
  }
}
