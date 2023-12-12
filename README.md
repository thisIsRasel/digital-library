# Digital Library
This project is a Library Management System that includes a user-friendly frontend developed using React, a RESTful API backend built with Python, and a database for storing book records. Additionally, a full-text search functionality for books has been implemented to enhance the user experience.

## Features:
- Frontend:
  - Developed using React and JavaScript.
  - Provides a user-friendly interface for easy navigation and interaction.

- Backend:
  - RESTful API built with Python to handle data operations.
  - Manages CRUD operations for book records.

- Database:
  - Integrated a PostgreSQL database to store book records efficiently.

- Full-text Search:
  -Implemented a powerful full-text search functionality for books.

- Deployment:
  - Containerized the application using Docker for easy deployment.

## Prjoect Setup
Run the following commands step by step to setup and access the project.

- First Build Only

  1. `docker network create app_main`
  2. `docker-compose up -d --build`

- Run Migrations

  3. `docker compose exec app_server alembic upgrade head`

- Access the application

  4. Open your browser and go to http://localhost:3000

### Performance consideration
Performance can be improved using load balancer for distributing incomming traffic to multiple servers.

## Future Improvements
- UI/UX can be enhanced
- Authentication/authorization can be implemented
- Caching can be implemented for api calls
- Retry mechanism can be added
- Include support for multiple languages to make the application accessible to a wider audience