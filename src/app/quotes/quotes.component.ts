import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../_services/quote.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quote: any;

  constructor(private quoteService: QuoteService) { }

  async ngOnInit() {
    this.quote = await firstValueFrom(this.quoteService.getQuote());
  }

  async getRandomQuote() {
    let x = await firstValueFrom(this.quoteService.getQuote());
    // if (this.quote?.content.split(' ').length > 35) {
    //   await this.getRandomQuote();
    // }
    this.quote = x;
    
  }

}
