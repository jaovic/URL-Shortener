import { faker } from '@faker-js/faker';

export const findShortenerMock = {
  id: faker.datatype.uuid(),
  url_id: faker.datatype.uuid(),
  code: faker.random.alphaNumeric(11),
  created_at: faker.date.between('2023-01-01T00:00:00.000Z', '2024-01-01T00:00:00.000Z'),
  updated_at: faker.date.between('2023-01-01T00:00:00.000Z', '2024-01-01T00:00:00.000Z'),
};
