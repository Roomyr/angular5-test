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

  public postCard(card: any) {
    return this.http.post('http://localhost:3000/card/', card);
  }

  public deleteCard(id: any) {
    return this.http.delete(`http://localhost:3000/card/${id}`);
  }

  public updateCard(id: any, card: any) {
    return this.http.put(`http://localhost:3000/card/${id}`, card);
  }
}
