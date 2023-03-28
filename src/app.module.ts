import { Module } from '@nestjs/common';
import { ShortenerModule } from './modules/shortener/shortener.module';
import { UrlModule } from './modules/url/url.module';

@Module({
  imports: [UrlModule, ShortenerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
