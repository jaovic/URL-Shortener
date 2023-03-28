import { shortener, url } from '@prisma/client';

export interface IcreateShortenerRpository {
  url_id: string;
  code: string;
}

export interface IShortenerRepository {
  exists(where: Partial<shortener> | any, select?: object): Promise<shortener | null | Partial<shortener> | null>;
  create(data: IcreateShortenerRpository): Promise<shortener>;
  findUrl(code: string): Promise<Partial<url>>;
}
