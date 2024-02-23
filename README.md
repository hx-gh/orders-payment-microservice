<div align="center">
    <h1>Microservices with Nest.js and Kafka</h1>
</div>
<div align="center">    
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
    <img src="https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white">
</div>
<div align="center">
  <sub>Built with ❤︎</br>
  </sub>
</div>
<br/>

# :computer: Technologies

This project was made using the follow technologies:

-   [Javascript]
-   [Nest.Js]
-   [Prisma]
-   [MySQL]
-   [Docker]
-   [Apache Kafka]

# :speech_balloon: Description

-   A mono-repo developed with NestJS, containing Orders and Payment services, employing Docker, MySQL and Kafka. Video tutorial at: https://www.youtube.com/watch?v=z87Yo6j_iK8&t=3991s

# :rocket: Features

-   Key features include:
-   Order service: localhost:3000/orders
-   Create Order - Get
-   List Orders - Post
-   Payment service: localhost:3001/orders
-   Get Payments - Get

# :construction_worker: How to run the server

```bash
# Clone Repository
$ git clone https://github.com/hx-gh/orders-payment-microservice.git
```

### 💻 Run with Dev Container (VSCode Plugin)

```bash
# Go to web folder
$ cd orders-payment-microservice
# Install Dependencies
$ npm install
# Open Dev Container (Make sure Docker is already running)
$ >Dev Containers: Open Folder in Container
#  Docker should handle the Image for Kafka, MySQL, Zookeeper and API
#  Start Orders service
$ npm run start:dev
#  Start Payments service
$ npm run start:dev payments
```

### 💻 Run without Dev Container - Support not provided

```bash
# Go to web folder
$ cd nestjs-bookmark-api
# Install Dependencies
$ npm install
# Start Docker Build
$ docker compose build
# Start Docker containers
$ docker compose up
# If running at Windows update the .env on each service for poiting to the correct MySQL URL.
# Start Orders service
$ npm run start:dev
# Start Payments service
$ npm run start:dev payments
```

### 💻 Starting Databases

```bash
# Go to web folder
$ cd nestjs-bookmark-api
# Go to Orders folder
$ cd apps/orders
# Run Prisma Migrate - Make sure you have Prisma installed globally
$ npx prisma migrate dev
# Go to Payments folder
$ cd apps/payments
# Run Prisma Migrate
$ npx prisma migrate dev
```

Released in 2024

Give a ⭐️ if this project helped you!
