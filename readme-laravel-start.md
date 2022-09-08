All command for start project laravel
---

#login/register
```shell
	
docker-compose run --rm composer require laravel/ui

#bootstrap
docker-compose run --rm artisan ui bootstrap
docker-compose run --rm artisan ui bootstrap --auth
#vue
docker-compose run --rm artisan ui vue
docker-compose run --rm artisan ui vue --auth
#react
docker-compose run --rm artisan ui react
docker-compose run --rm artisan ui react --auth
```

#needed for laravel 9
composer require laravel/breeze --dev
php artisan breeze:install vue
npm install --save-dev vite laravel-vite-plugin
npm install --save-dev @vitejs/plugin-vue
npm run build

---
#install vite for frontend react in laravel
Vite is a modern frontend build tool that provides an extremely fast development environment and bundles your code for production.

- https://laravel-vite.dev/guide/quick-start.html
- https://laravel.com/docs/9.x/vite

- Delete resources/js and create resources/scripts 
- Delete webpack.mix.js and remove the dependency to laravel-mix 
- Add development dependencies on vite and vite-plugin-laravel 
- Update package.json's scripts to use Vite 
- Add a dependency on innocenzi/laravel-vite 
- Create a vite.config.ts configuration file 
- Add a call to the @vite directive in welcome.blade.php

```php
npx @preset/cli apply laravel:vite 
rm webpack.mix.js
rm webpack.mix.js
composer require innocenzi/laravel-vite:0.2.*
npm i -D vite vite-plugin-laravel
 
php artisan vendor:publish --tag=vite-config

npm install react@latest react-dom@latest
npm i @vitejs/plugin-react --force
npm i @vitejs/plugin-react-refresh --force

npm install source-map-support
```