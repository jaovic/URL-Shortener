import { Inject, Injectable } from '@nestjs/common';
import { getClassError } from '../../../../utils/errors/custom.error';
import { ShortenerRepository } from '../../repository/shortener.repository';
import { ShortenerErrorsCodes } from '../../structure/erros.codes.structure';
import { IShortenerRepository } from '../../structure/IRepository.structure';
import { IFindShortener, IFindShortenerService, IFindUrlServiceReturn } from '../../structure/IService.structure';

@Injectable()
export class FindShortenerService implements IFindShortenerService {
  private _error = getClassError<ShortenerErrorsCodes>;

  private readonly _urlNotExist = 'error: url does not exist!';
  private readonly _prismaError = 'error: database persistence error, contact admin!';

  constructor(
    @Inject(ShortenerRepository)
    private readonly shortenerRepository: IShortenerRepository,
  ) {}

  async execute(data: IFindShortener): Promise<IFindUrlServiceReturn> {
    const codeExist = await this.shortenerRepository.exists({ code: data.code });

    if (!codeExist) throw this._error(this._urlNotExist, ShortenerErrorsCodes.NOT_FOUND, 404);

    try {
      const url = await this.shortenerRepository.findUrl(data.code);

      return { URL: `${url.url}` };
    } catch (error) {
      throw this._error(this._prismaError, ShortenerErrorsCodes.INTERNAL, 500);
    }
  }
}
