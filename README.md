
# Todo App Backend

This is the backend service for the Todo App. It is built using Node.js, Express, and Sequelize for managing tasks in a PostgreSQL database.

## Prerequisites

- Node.js
- PostgreSQL

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/todoapp-backend.git
    cd todoapp-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the database:
    - Create a PostgreSQL database.
    - Update the database configuration in `src/db.ts`.

4. Run the database migrations and seed the database:
    ```sh
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

## Running the Application

Start the server:
```sh
npm start
```

The server will be running at `http://localhost:3000`.

## API Endpoints

- `GET /tasks` - Retrieve all tasks
- `GET /tasks/:id` - Retrieve a task by ID
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

## Project Structure

- `src/models` - Sequelize models
- `src/routes` - Express routes
- `src/controllers` - Route controllers
- `sql` - SQL scripts

