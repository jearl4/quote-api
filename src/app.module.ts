import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteController } from './quote/quote.controller';
import { QuoteService } from './quote/quote.service';

@Module({
  imports: [],
  controllers: [AppController, QuoteController],
  providers: [AppService, QuoteService],
})
export class AppModule {}
