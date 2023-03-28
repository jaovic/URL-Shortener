import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { ShortenerRepository } from '../../../../shortener/repository/shortener.repository';
import { findShortenerMock } from '../../../../shortener/service/reading/tests/mocks/findShortener.mock';
import { UrlRepository } from '../../../repository/url.repository';
import { PrismaService } from '../../../../../prisma.service';
import { CreateUrlService } from '../createUrl.service';
import { createUrlMock, createUrlMockResult } from './mocks/createUrl.mock';

describe('createUrlService', () => {
  let service: CreateUrlService;
  let urlRepository: UrlRepository;
  let shortenerRpository: ShortenerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUrlService,
        {
          provide: UrlRepository,
          useValue: {
            exists: jest.fn().mockResolvedValue(createUrlMock),
            create: jest.fn().mockResolvedValue({ url: faker.internet.url() }),
          },
        },
        {
          provide: ShortenerRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(findShortenerMock),
          },
        },
        PrismaService,
      ],
    }).compile();

    service = module.get<CreateUrlService>(CreateUrlService);
    urlRepository = module.get<UrlRepository>(UrlRepository);
    shortenerRpository = module.get<ShortenerRepository>(ShortenerRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(urlRepository).toBeDefined();
    expect(shortenerRpository).toBeDefined();
  });

  describe('create url:', () => {
    it('confirmation create url and shortener', async () => {
      jest.spyOn(urlRepository, 'exists').mockResolvedValueOnce(null);
      const result = await service.execute({
        url: faker.internet.url(),
      });
      expect(result).toHaveProperty('URL');
    });

    it('error: url already exist!', async () => {
      jest.spyOn(urlRepository, 'exists').mockResolvedValueOnce(createUrlMock);
      try {
        await service.execute({
          url: faker.internet.url(),
        });
      } catch (error) {
        expect(error).toHaveProperty('message');
        expect(error).toHaveProperty('httpStatusCode');
        expect(error.httpStatusCode).toEqual(403);
        expect(error.message).toEqual('error: url already exist!');
      }
    });

    it('error: database persistence error, contact admin!', async () => {
      jest.spyOn(urlRepository, 'exists').mockResolvedValueOnce(null);
      jest.spyOn(shortenerRpository, 'create').mockResolvedValueOnce(undefined);
      try {
        await service.execute({
          url: faker.internet.url(),
        });
      } catch (error) {
        expect(error).toHaveProperty('message');
        expect(error).toHaveProperty('httpStatusCode');
        expect(error.httpStatusCode).toEqual(500);
        expect(error.message).toEqual('error: database persistence error, contact admin!');
      }
    });
  });
});
