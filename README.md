REACT LARAVEL DOCKER
---
# laravel && Docker
- install Docker
- install laravel
- update node , npm
- install composer and npm and run dev
- php artisan key:generate
- php artisan migrate
- ---
- composer require laravel/ui
- php artisan ui react
  - npm update
    npm install -g npm@8.19.1
    npm upgrade
- npm install
# execute with laravel mix, then needed to install laravel-mix 
- npm install laravel-mix --save-dev
- touch webpack.mix.js
  - cat > webpack.mix.js
    const mix = require('laravel-mix');
    mix.js('resources/js/app.js','public/js').react();
- npm install --save-dev @babel/preset-react
-  npm install popper.js --save
- npm install
- add to "scripts" in package.json
    "watch" : "mix watch"
- npm run watch (2 times)




