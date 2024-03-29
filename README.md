### Laravel Backend Installation

1. Clone the repo and change the directory

```sh
git clone https://github.com/TariqulAmin/inventory.git
cd inventory
```

2. Install all the dependencies using composer

```sh
composer install
```

3. Copy the .env.example file and make the required configuration changes in the .env file

```
cp .env.example .env
```

4. Generate a new application key

```sh
php artisan key:generate
```

5. Start the local development server

```sh
php artisan serve
```

### React Frontend Installation

1. Open a new terminal and go to frontend

```sh
cd frontend
```

2. Install NPM packages

```sh
npm install
```

3. Run in development mode

```sh
npm start
```
