import { Injectable } from '@nestjs/common';
import { Quote } from 'src/dto/quote.dto';
import { agileQuotes } from 'src/mock-data/agile-quotes.mock';

@Injectable()
export class QuoteService {

  getRandomAgileQuote(): Quote {
    const quote: Quote = agileQuotes[Math.floor(Math.random() * agileQuotes.length)];
    return quote;
  }

  getAgileQuote(id: number): Quote {
    const quote: Quote = agileQuotes[id];
    return quote;
  }
}
