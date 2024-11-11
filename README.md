# Stefanini Test

## Setup
To start the servers and database, execute on root:

      docker-compose up --build
      
This will create all necessary servers and the database.

## Backend API
### List of Movies:
POST http://localhost:5000/movies/
Retrieves a list of all movies.

Request Body:
      {
        "movie_research": string,
        "user": string
      }

### List Of Logs:
POST http://localhost:5000/logs/
Retrieves a list of all logs.

## Frontend
Access the frontend at: http://localhost:3000/movies

#### ---------------------------------------------------------------------------

It was a simple test, and many other validations and functionalities can be applied. For now, I focused on being quick and ensuring the system is functional. I am fully open to discussing my technical decisions and implementing any additional functionalities as requested.
