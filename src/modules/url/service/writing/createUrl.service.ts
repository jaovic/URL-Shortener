import { Inject, Injectable } from '@nestjs/common';
import { url } from '@prisma/client';
import { getClassError } from 'src/utils/errors/custom.error';
import { UrlRepository } from '../../repository/url.repository';
import { UrlErrorsCodes } from '../../structure/erros.codes.structure';
import { IUrlRepository } from '../../structure/IRepository.structure';
import { ICreateUrlrService, IcreateUserService } from '../../structure/IService.structure';

@Injectable()
export class CreateUrlService implements ICreateUrlrService {
  private _error = getClassError<UrlErrorsCodes>;

  private readonly _urlExist = 'error: url already exist!';
  private readonly _prismaError = 'error: database persistence error, contact admin!';

  constructor(
    @Inject(UrlRepository)
    private readonly urlRepository: IUrlRepository,
  ) {}

  async execute(data: IcreateUserService): Promise<url> {
    const urlExist = await this.urlRepository.exists({ url: data.url });

    if (urlExist) throw this._error(this._urlExist, UrlErrorsCodes.CONFLICT, 403);

    const result = Math.random().toString(36).substring(2, 7);
    console.log(result);

    try {
      return this.urlRepository.create({ url: data.url });
    } catch (error) {
      throw this._error(this._prismaError, UrlErrorsCodes.INTERNAL, 500);
    }
  }
}
