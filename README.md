# Node/Express/Mongoose/Typescript Product Management App

Node application for manage simple products using Typescript and Express as framework. Allows create, read, update and delete products, also get products for specific color or id and update price.

# Getting started

To get the Node server running locally:

- Clone this repository
- `npm install` to install dependencies.
- `npm run dev` to start the local server.
- `npm run start` to build the application.

## Dependencies

- [expressjs](https://github.com/expressjs/express) - Framework for handling and routing HTTP requests.
- [mongoose](https://github.com/Automattic/mongoose) - For modeling MongoDB data to javascript.
- [dotenv](https://github.com/motdotla/dotenv) - For load environment variables.

## Structure

- `src/index.ts` - Entry point of the application.
- `src/database/` - Contains the database connection configuration.
- `src/models/` - Contains the schema definitions for the Mongoose models.
- `src/routes/` - Contains the route definitions for the API.
