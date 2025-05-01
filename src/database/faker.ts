import { faker } from "@faker-js/faker";
import { users } from "@/schemas/user";
import { User } from "@/schemas/user";

const generateUser = (id: number): User => ({
  name: faker.person.fullName(),
  location: faker.location.city(),
  skills: faker.helpers.arrayElements(
    [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "Django",
      "SQL",
      "GraphQL",
    ],
    3
  ),
  role:
    id === 1
      ? "SYSTEM_ADMIN"
      : faker.helpers.arrayElement(["DEVELOPER", "ADMIN"]),
  description: faker.lorem.paragraph(),
  social: [
    { network: "LinkedIn", link: faker.internet.url() },
    { network: "GitHub", link: faker.internet.url() },
  ],
  portfolio: faker.internet.url(),
  profileImage: `https://loremfaces.net/256/id/${id}.jpg`,
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
});

export const usersData: User[] = Array.from({ length: 15 }, (_, index) =>
  generateUser(index + 1)
);
