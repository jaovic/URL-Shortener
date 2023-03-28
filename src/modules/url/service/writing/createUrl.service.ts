import { Inject, Injectable } from '@nestjs/common';
import { ShortenerRepository } from '../../../shortener/repository/shortener.repository';
import { IShortenerRepository } from '../../../shortener/structure/IRepository.structure';
import { getClassError } from '../../../../utils/errors/custom.error';
import { UrlRepository } from '../../repository/url.repository';
import { UrlErrorsCodes } from '../../structure/erros.codes.structure';
import { IUrlRepository } from '../../structure/IRepository.structure';
import { ICreateUrlrService, ICreateUrlServiceReturn, ICreateUrl } from '../../structure/IService.structure';

@Injectable()
export class CreateUrlService implements ICreateUrlrService {
  private _error = getClassError<UrlErrorsCodes>;

  private readonly _urlExist = 'error: url already exist!';
  private readonly _prismaError = 'error: database persistence error, contact admin!';

  constructor(
    @Inject(UrlRepository)
    private readonly urlRepository: IUrlRepository,
    @Inject(ShortenerRepository)
    private readonly shortenerRepository: IShortenerRepository,
  ) {}

  async execute(data: ICreateUrl): Promise<ICreateUrlServiceReturn> {
    const urlExist = await this.urlRepository.exists({ url: data.url });

    if (urlExist) throw this._error(this._urlExist, UrlErrorsCodes.CONFLICT, 403);

    const code = Math.random().toString(36).slice(2);

    const url = await this.urlRepository.create({ url: data.url });

    const createShortener = await this.shortenerRepository.create({
      url_id: url.id,
      code,
    });

    if (!createShortener) throw this._error(this._prismaError, UrlErrorsCodes.INTERNAL, 500);

    return { URL: `localhost:3000/v1/shortener/find/${code}` };
  }
}
