import { Injectable } from '@nestjs/common';
import { url } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { IcreateUrlRpository, IUrlRepository } from '../structure/IRepository.structure';

@Injectable()
export class UrlRepository implements IUrlRepository {
  constructor(private prisma: PrismaService) {}

  async exists(where: Partial<url> | any, select?: object): Promise<url | null | Partial<url> | null> {
    return this.prisma.url.findFirst({
      where,
      select,
    });
  }

  async create(data: IcreateUrlRpository): Promise<url> {
    return this.prisma.url.create({
      data: {
        url: data.url,
      },
    });
  }
}
