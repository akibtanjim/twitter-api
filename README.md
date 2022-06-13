<h1 align="center">
  <br>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eimUX98YCqnw0tFLXbbCVkrGfZevLgMmhQ&usqp=CAU" alt="API" height="200" width="200">
  <br>
</h1>

## Twitter API:

Simple twitter API that allows you to create your own twitter posts, see own tweets, follow other users and fetch posts from you and your followed persons posts as newsfeed.

# Overview

This project uses `express.js`, `MySql` `sequelize` to implement all the API's

# Authentication

All the endpoints of `users` are protected with `JWT` `token` validation. There is a basic level of token `blacklist` system (This will reset on each restart) for already used token (`token` that are used in for refresh token / logout ).

# Config

This project can be configured with `.env`

```
#APP
HOST=YOUR_HOST
APP_PORT=YOUR_PORT
LOGGER_NAME=YOUR_LOGGER_NAME
LOG_LEVEL=YOUR_LOGGER_LEVEL
NODE_ENV=YOUR_NODE_ENVIRONMENT

#Database
DB_HOSTNAME=YOUR_DATABASE_HOST
DB_PORT=YOUR_DATABASE_PORT
DB_NAME=YOUR_DATABASE_NAME
DB_USERNAME=YOUR_DATABASE_USERNAME
DB_PASSWORD=YOUR_DATABASE_PASSWORD
DB_DIALECT=mysql
DB_ROOT_PASSWORD=YOUR_DATABASE_ROOT_PASSWORD

#JWT
JWT_SECRET=YOUR_JWT_SECRET
JWT_ALGORITHM=HS256
JWT_ACCESS_TOKEN_EXPIRY=ACCESS_TOKEN_EXPIRY_IN_MINUTES
JWT_REFRESH_TOKEN_EXPIRY=REFRESH_TOKEN_EXPIRY_IN_MINUTES

#API Rate Limiting Config
API_RATE_LIMIT_INTERVAL_IN_MIN=1
API_MAX_REQUEST_LIMIT=60
```

## Installation:

- Clone the repository: `https://github.com/akibtanjim/twitter-api.git`
- Copy `.env.example`to `.env`. Fill this with appropriate value
- For manual install please follow the below steps

  ```
      npm i
      npm run db:migrate
      npm run db:seed
      npm run test
      npm start
  ```

## Defaults:

- Admin default password is `#Admin123`
- User default password is `#User123`

## API Docs (Postman):

Please open browser and go to below url to see the api docs

```
https://documenter.getpostman.com/view/9001196/Uz5NjtXU
```

### N.B: To import collection to postman click `Run in Postman` button (on top right in the upper section) of the above url or import postman collections to postman from `docs` folder
