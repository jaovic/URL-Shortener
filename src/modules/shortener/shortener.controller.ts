import { Controller, Inject, Param, Post } from '@nestjs/common';
import { FindShortenerDto } from './dto/findShortener.dto';
import { FindShortenerService } from './service/reading/findShortener.service';
import { IFindShortenerService } from './structure/IService.structure';

@Controller('v1/shortener')
export class ShortenerController {
  constructor(
    @Inject(FindShortenerService)
    private readonly FindShortenerService: IFindShortenerService,
  ) {}

  @Post('/find/:code')
  async createUser(@Param() param: FindShortenerDto) {
    return this.FindShortenerService.execute(param);
  }
}
