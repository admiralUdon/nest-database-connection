<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://seeklogo.com/images/M/microsoft-sql-server-logo-96AF49E2B3-seeklogo.com.png" width="100" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" width="100" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" width="100" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_vertical_logo_icon_168900.png" width="100" alt="Nest Logo" /></a>
</p>

# Nest Database Connection

  <p align="center">A <a href="http://nestjs.com/" target="_blank">NestJs</a> which demonstrates the power of integrating directly with databases, leveraging raw SQL queries and query builders for precise control and flexibility.</p>

## Description

A [NestJs](https://github.com/nestjs/nest) project that showcases how to integrate directly with databases without relying on Object-Relational Mappers (ORMs) like TypeORM or Prisma. The primary goal is to demonstrate how to perform database operations using raw SQL queries or query builders, providing greater control and flexibility over database interactions.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Oracle Dependency
To connect to an Oracle database, you need to install the Oracle Instant Client (refer to `.env.example` for details). 

Download [Oracle Instant Client](https://www.oracle.com/my/database/technologies/instant-client/downloads.html) from the official Oracle website.

Alternatively, you can use Docker with the following command:

```bash
$ docker compose up
```

For docker installation [Docker Engine](https://docs.docker.com/engine/install/)

## External SQL Files
To make sure that .sql files is imported when building the application `/dist`. Please make sure assets is configured as below in your `nest-cli.json`. Refer [Nest Workspace](https://docs.nestjs.com/cli/monorepo#assets) official documentation.
```json
"compilerOptions": {
  "assets": [{ "include": "**/*.sql", "watchAssets": true }]
}
```

## Stay in touch

- Author - [Ahmad Miqdaad](https://www.admiraludon.com)
- Website - [https://www.admiraludon.com](https://www.admiraludon.com/)