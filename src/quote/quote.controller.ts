import { Controller, Get, Param } from '@nestjs/common';
import { Quote } from 'src/dto/quote.dto';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private quoteService: QuoteService) {}

  @Get('agile')
  async getRandomQuote(): Promise<Quote> {
    return this.quoteService.getRandomAgileQuote();
  }

  @Get('agile/:id')
  async getQuote(@Param('id') id: number): Promise<Quote> {
    return this.quoteService.getAgileQuote(id);
  }
}
