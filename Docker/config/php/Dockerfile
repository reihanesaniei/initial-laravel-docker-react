FROM php:8.1-fpm

WORKDIR /usr/share/nginx
# Install dependencies
RUN apt-get update  \
    && apt-get install -y \
        build-essential \
        default-mysql-client \
        libpng-dev \
        libjpeg62-turbo-dev \
        libfreetype6-dev \
        locales \
        zip \
        jpegoptim optipng pngquant gifsicle \
        vim \
        unzip \
        curl \
        wget \
        libonig-dev \
        libzip-dev \
        libxml2-dev \
        lua-zlib-dev \
        libmemcached-dev \
        nodejs \
        npm \
    && usermod -u 1000 www-data

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
RUN pecl install redis && docker-php-ext-enable redis

RUN apt-get update && apt-get install -y \
    libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
        && docker-php-ext-enable imagick

# Install extensions
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl mysqli soap


# Install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN rm -rf composer-setup.php && composer config --global repos.packagist composer https://packagist.org


RUN printf '[PHP]\nmemory_limit=2G\n' > /usr/local/etc/php/conf.d/memory.ini

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug







COPY . /usr/share/nginx


#RUN composer install
#    && chmod 775 storage \
#    && chmod 775 storage/app \
#    && chmod 775 storage/framework \
#    && chmod 775 storage/logs \
#    && chmod 775 bootstrap/cache \
#    && chown $USER:www-data storage \
#    && chown $USER:www-data bootstrap/cache
#    && chown -R www-data:www-data /usr/share/nginx

CMD "/bin/bash" "-c" "chmod 775 storage"
CMD "/bin/bash" "-c" "chmod 775 storage/app"
CMD "/bin/bash" "-c" "chmod 775 storage/framework"
CMD "/bin/bash" "-c" "chmod 775 storage/logs"
CMD "/bin/bash" "-c" "chown $USER:www-data storage"
CMD "/bin/bash" "-c" "chown $USER:www-data bootstrap/cache"
CMD "/bin/bash" "-c" "chown -R www-data:www-data /usr/share/nginx"

#add config nginx
WORKDIR /etc
RUN mkdir -p "nginx/conf.d"
WORKDIR /nginx/conf.d
CMD "/bin/bash" "-c" "cp ./Docker/config/nginx/default.conf nginx-base:/etc/nginx/conf.d/"
WORKDIR /usr/share/nginx

CMD "/bin/bash" "-c" "cp .env.example .env"


EXPOSE 9000
CMD ["php-fpm"]
