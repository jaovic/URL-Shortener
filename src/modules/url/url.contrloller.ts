import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUrlDto } from './dto/createUrl.dto';
import { CreateUrlService } from './service/writing/createUrl.service';
import { ICreateUrlrService } from './structure/IService.structure';

@Controller('v1/url')
export class UrlController {
  constructor(
    @Inject(CreateUrlService)
    private readonly createUrlService: ICreateUrlrService,
  ) {}

  @Post('/create')
  async createUser(@Body() data: CreateUrlDto) {
    return this.createUrlService.execute(data);
  }
}
