# Nest JS Starter Kit

This is a starter kit for NestJS. It is a simple project that includes several endpoints and services, making it an excellent starting point for a new project.

## Features

- ENV Support
- Logging Service (File-Based Logging)
- Request Meta Data
  - Request ID
  - Request IP
  - Request URL
  - Request Method
  - Request TimeStamp
  - Application Version
  - Device Type
  - User Agent etc.

### Installation

```bash
 npm install
```

### Running the app

```bash
# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Copy .env.example to .env

```bash
cp .env.example .env
```

### Change the values in .env file

```bash
# --- App Configuration ---
APP_NAME="Example App" # or your app name
APP_URL=http://example.com # or your url
PORT=3000 # or your port

# --- Database Configuration ---
DB_HOST=example-db-host # or your host
DB_PORT=5432 # or your port
DB_USERNAME=example-username  # or your username
DB_PASSWORD=example-password # or your password
DB_DATABASE=example-db # or your database
TZ=UTC # or your timezone

# --- Uploads Configuration ---
UPLOADS_FOLDER=example/uploads # or your uploads folder 'uploads' is default folder

# --- Mail Configuration ---
MAIL_HOST=example-mail-host # or your mail host
MAIL_PORT=587 # or your mail port
MAIL_USERNAME=example-mail-username # or your mail username
MAIL_PASSWORD=example-mail-password # or your mail password
MAIL_FROM_ADDRESS=example@mail.com # or your mail from address
MAIL_FROM_NAME=Example Name # or your mail from name
```

### Author

- [Sanjay Kumar](https://github.com/sanjaykm098)
- [Email](mailto:me@sanjay.works)
- [Website](https://sanjay.works)
- [LinkedIn](https://www.linkedin.com/in/sanjaykm098/)
- [Twitter](https://twitter.com/sanjaykm098)
