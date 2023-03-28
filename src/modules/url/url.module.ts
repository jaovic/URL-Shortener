import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UrlRepository } from './repository/url.repository';
import { CreateUrlService } from './service/writing/createUrl.service';
import { UrlController } from './url.contrloller';

@Module({
  imports: [],
  controllers: [UrlController],
  providers: [CreateUrlService, PrismaService, UrlRepository],
})
export class UrlModule {}
