import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShortenerRepository } from './repository/shortener.repository';
import { FindShortenerService } from './service/reading/findShortener.service';
import { ShortenerController } from './shortener.controller';

@Module({
  imports: [],
  controllers: [ShortenerController],
  providers: [FindShortenerService, PrismaService, ShortenerRepository],
})
export class ShortenerModule {}
