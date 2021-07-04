# Introduction

This project is the Big Bag n Go technical test.  
The goal is to create an e-commerce app.

# Get started

To run the project, make sure to have `docker` and `docker-compose` installed on your machine.    
Make sure port `3000`, `5432` and `8080` are available.   
Then, run:

```sh
docker-compose up
```

Once containers are ready to go (it can takes a few minutes), you can access the e-commerce in your browser at `http://localhost:3000`.

# Architecture

- Front-end is running on port 3000, it is a [Create-React-App](https://create-react-app.dev/) project. It uses [React-router](https://reactrouter.com/) for routing, [react-hook-form](https://react-hook-form.com/) for form management and [Material-UI](https://material-ui.com/) for styling.

- Back-end is running on port 8080, it is a [Nest](https://nestjs.com/) project using [TypeORM](https://typeorm.io/#/) to connect with a [PostGre](https://www.postgresql.org/) database.

- Everything is running inside [Docker](https://docs.docker.com/) containers and orchestrated using [docker-compose](https://docs.docker.com/compose/).

# Checklist

## Orchestration

- [x] Run the whole project inside containers using docker-compose
- [ ] Communication between each service following micro service communication patterns

## Backend

- [x] Shop service with CRUD
- [ ] Product service with CRUD

## Frontend

- [x] Display shops
- [x] Backoffice for shops
- [x] Add a shop
- [x] Delete a shop
- [ ] Update a shop

- [ ] Display products
- [ ] Backoffice for products
- [ ] Add a product
- [ ] Delete a product
- [ ] Update a product
