# Express - MYSQL API

API with Express and MYSQL

## Getting Started :arrow_forward:

Instrucctions for configuration and deployment this proyect

### Prerequisites :clipboard:

- Install [NodeJS y NPM](https://nodejs.org/es/download/)
- Install [Docker](https://docs.docker.com/engine/install/) y [Docker-compose](https://docs.docker.com/compose/install/)

### Installing :arrow_down:

Steps

- Install dependencies if you want to execute server:
```sh
$ npm i
```
- Configure your environment variables on a .env file like in '.env.example'

## Deployment :package:

- Init your database and server with:
```sh
$ docker-compose build 
$ docker-compose up -d
```

- To start to adminer interface just navigate to localhost on port 8082


- to run proyect in development mode execute:
```
$ npm run dev
```

- Execute the tests with:
```sh
$ npm test
```

- Server run on:

[localhost:${PORT}/api/v1/](http://localhost:3300/api/v1/)

- Watch documentation Swagger UI:

[localhost:${PORT}/api/v1/docs](http://localhost:3300/api/v1/docs)

## Built With :hammer_and_wrench:

- [NodeJs](https://nodejs.org/es/)
  - [Express Framework](https://expressjs.com/es/)
- [Docker](https://docs.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- [MYSQL](https://www.mysql.com/)

## Contributing :family_man_man_boy:

Please read [CONTRIBUTING.md](https://www.aaaimx.org/cod) for details on our code of conduct, and the process for submitting pull requests to us.

## Future work :rocket:

## Contributors :family_man_man_boy:

- **Paul Mena** - _Initial work_ - [@paulspartan14](https://github.com/paulspartan14)

## References :link:

- [API Rest node js mysql(2020)](https://www.youtube.com/watch?v=_Fh13KHVJU0&list=PLTUzJ8zLXj1zabIVKysqm_VjO6-jpyUIz)

## License :page_facing_up:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
