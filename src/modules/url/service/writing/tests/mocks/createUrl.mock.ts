import { faker } from '@faker-js/faker';

export const createUrlMock = {
  id: faker.datatype.uuid(),
  url: faker.internet.url(),
  created_at: faker.date.between('2023-01-01T00:00:00.000Z', '2024-01-01T00:00:00.000Z'),
  updated_at: faker.date.between('2023-01-01T00:00:00.000Z', '2024-01-01T00:00:00.000Z'),
};

export const createUrlMockResult = {
  URL: `localhost:3000/v1/shortener/find/${faker.random.alphaNumeric(11)}`,
};
