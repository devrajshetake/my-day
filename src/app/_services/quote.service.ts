import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'https://api.quotable.io/random';

  constructor(private http: HttpClient) { }

  getQuote() {
    return this.http.get(this.apiUrl);
  }

}
