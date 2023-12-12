# Digital Library
Welcome to the Digital Library Management System! This application includes a user-friendly frontend developed using React, a RESTful API backend built with Python, and a database for storing book records. Additionally, a full-text search functionality for books has been implemented to enhance the user experience.

## Features
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

## Prerequisites
Need to have [docker](https://www.docker.com/get-started/) installed in the machine.

## Installation
Clone the repository and run the following commands in order step by step in project root directory to setup and access the application.

1. Build
```bash
docker network create app_main
docker-compose up -d --build
```

2. Run Migrations
```bash
docker compose exec app_server alembic upgrade head
```

3. Open your browser and go to http://localhost:3000/

## Performance Consideration
Performance can be improved using load balancer for distributing incomming traffic to multiple servers.

## Future Improvements
- UI/UX can be enhanced
- Authentication/authorization can be implemented
- Caching can be implemented for api calls
- Retry mechanism can be added
- Include support for multiple languages to make the application accessible to a wider audience