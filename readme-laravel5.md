

## About needed command for installing Laravel 5
```php
composer install
```

```shell
mkdir storage
cd storage/
mkdir logs
mkdir views
cd storage/
chmod -R 755 logs/
chmod -R 777 logs/
cd /usr/share/nginx/
cd bootstrap/
chmod -R 755 cache/
chmod -R 777 cache/
cd ..
php artisan key:generate
cd storage/
mkdir framework
cd framework/
mkdir cache
mkdir viwes
mkdir views
rm -rf viwes
mkdir sessions
cd ..
chmod -R 777 framework/

```
