import { url } from '@prisma/client';

export interface IcreateUserService {
  url: string;
}

export interface ICreateUrlrService {
  execute(data: IcreateUserService): Promise<url>;
}
