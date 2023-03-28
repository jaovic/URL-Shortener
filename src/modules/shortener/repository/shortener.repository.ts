import { Injectable } from '@nestjs/common';
import { shortener, url } from '@prisma/client';
import { PrismaService } from '../../../prisma.service';
import { IcreateShortenerRpository, IShortenerRepository } from '../structure/IRepository.structure';

@Injectable()
export class ShortenerRepository implements IShortenerRepository {
  constructor(private prisma: PrismaService) {}

  async exists(
    where: Partial<shortener> | any,
    select?: object,
  ): Promise<shortener | null | Partial<shortener> | null> {
    return this.prisma.shortener.findFirst({
      where,
      select,
    });
  }

  async create(data: IcreateShortenerRpository): Promise<shortener> {
    return this.prisma.shortener.create({ data });
  }

  async findUrl(code: string): Promise<Partial<url>> {
    return this.prisma.url.findFirst({
      select: {
        url: true,
      },
      where: {
        shortener: {
          every: {
            code,
          },
        },
      },
    });
  }
}
