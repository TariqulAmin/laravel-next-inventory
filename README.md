### Laravel Backend Installation

1. Clone the repo and change the directory

```sh
git clone https://github.com/TariqulAmin/laravel-next-inventory.git
cd laravel-next-inventory
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

5. Run database migrations by running

```sh
php artisan migrate
```

6. Start the local development server

```sh
php artisan serve
```

### React Frontend Installation

1. Open a new terminal and go to frontend_next

```sh
cd frontend_next
```

2. Copy the .env.local file and make the required configuration changes in the .env file

```
cp .env.local .env
```

3. Install NPM packages

```sh
npm install
```

4. Run in development mode

```sh
npm run dev
```

4. Go to http://localhost:3000/login
