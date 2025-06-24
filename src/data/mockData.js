import { faker } from '@faker-js/faker';

export const mockData = Array.from({ length: 120 }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  phone: faker.phone.number('+91-9####-#####'),
  email: faker.internet.email(),
  website: faker.internet.url(),
  date: faker.date.past().toISOString().split('T')[0], // yyyy-mm-dd
  status: faker.helpers.arrayElement(['Active', 'Pending', 'Inactive']),
  isSubscribed: faker.datatype.boolean(),
}));
