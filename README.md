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

<<<<<<< HEAD
5. Run database migrations by running

```sh
php artisan migrate
```

6. Start the local development server
=======
5. Start the local development server
>>>>>>> f782e2f6c1cc261c674c212682a475116ee56eb2

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
npm run dev
```
