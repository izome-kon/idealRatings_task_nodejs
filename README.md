## Technologies

- **Backend Framework**: Node.js + Typescript
- **Database**: MongoDB

## Folder Structure

```
backend_nodejs
├─ .env.example
├─ Dockerfile
├─ docker-compose.yml
├─ init.sh
├─ jest.config.js
├─ package.json
├─ src
│  ├─ app.ts
│  ├─ config
│  │  └─ mongodb.ts
│  ├─ constants
│  │  └─ paths.ts
│  ├─ container.ts
│  ├─ controllers
│  │  ├─ index.ts
│  │  └─ person.controller.ts
│  ├─ data
│  │  ├─ person.csv
│  │  └─ seeds
│  │     ├─ seed-person-details.ts
│  │     └─ seed.ts
│  ├─ mappers
│  │  ├─ index.ts
│  │  └─ person
│  │     ├─ csvPerson.mapper.ts
│  │     └─ mongoPerson.mapper.ts
│  ├─ middlewares
│  │  └─ errorHandler.ts
│  ├─ models
│  │  ├─ index.ts
│  │  └─ person.mongo.model.ts
├─ repositories
│  │  ├─ index.ts
│  │  └─ personRepository
│  │     ├─ CsvPersonRepository.ts
│  │     ├─ IPersonRepository.ts
│  │     └─ MongoPersonRepository.ts
│  ├─ routes
│  │  ├─ index.ts
│  │  └─ person.routes.ts
│  ├─ server.ts
│  ├─ services
│  │  └─ person.service.ts
│  ├─ types
│  │  ├─ index.ts
│  │  └─ person.type.ts
│  └─ utils
│     ├─ buildPersonFilter.ts
│     └─ response.ts
├─ tests
│  ├─ mappers
│  │  ├─ csvPerson.mapper.test.ts
│  │  └─ mongoPerson.mapper.test.ts
│  ├─ repositories
│  │  ├─ CsvPersonRepository.test.ts
│  │  └─ MongoPersonRepository.test.ts
│  ├─ services
│  │  └─ person.service.test.ts
│  └─ utils
│     └─ buildPersonFilter.test.ts
└─ tsconfig.json
```