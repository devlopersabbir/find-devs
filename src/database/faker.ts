import { faker } from "@faker-js/faker";
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
  role: faker.helpers.arrayElement(["DEVELOPER", "ADMIN"]),
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

export const usersData: User[] = Array.from({ length: 10 }).map((_, i) =>
  generateUser(i + 1)
);
