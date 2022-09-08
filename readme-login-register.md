Add Login - Register
----
#first add
```shell
composer require laravel/ui
php artisan ui bootstrap
php artisan ui vue
php artisan ui react
```

# Generate login / registration scaffolding...
```shell
php artisan ui bootstrap --auth
php artisan ui vue --auth
php artisan ui react --auth
  
```

#After generating UI need to install npm dependencies.
```shell
npm run install && npm run dev
php artisan migrate
```

## you must have build folder and manifest.json
```shell
php artisan pwa:manifest
```