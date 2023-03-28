import { url } from '@prisma/client';

export interface IcreateUrlRpository {
  url: string;
}

export interface IUrlRepository {
  exists(where: Partial<url> | any, select?: object): Promise<url | null | Partial<url> | null>;
  create(data: IcreateUrlRpository): Promise<url>;
}
