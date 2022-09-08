

## initial command for working docker

```php
docker stop -t --name web-test
docker stop -t "web-test"  
docker stop --rm --name web-test -p 8080:8000  
docker-compose start -i 20cfgjrlkjg

//install laravel version ^9
docker-compose run --rm composer create-project laravel/laravel:^9 .

docker-compose ls -a //
docker-compose port
docker-compose ps -a //show all of containers
docker-compose image ls
docker-compose exec php bash //exit code 1

//show content of file or create file
cat index.php
//that the ">" operator overwrites the contents of a file if it is already present.
> secondFile.txt
// use the redirection operator ">" followed by the name of the file. Now you will be prompted to insert data into this newly created file. Type a line and then press "Ctrl+D" to save the file.
cat > secondFile.txt
//You can use the redirection operator ">>" to append the contents of a file into anothe
cat secondFile.txt >> hello.txt


docker-compose exec php sh //exit 1
docker-compose stop $(docker ps -a -q) //stop all container

//other
docker run --rm artisan make:job ProcessUser
docker-compose run --rm artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
docker-compose run --rm composer require laravel/legacy-factories
docker-compose run --rm composer update --ignore-platform-reqs
docker-compose run --rm artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
docker-compose run --rm composer require laravel/sanctum

ADD [--chown=<user>:<group>] <src>... <dest>
ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]

COPY [--chown=<user>:<group>] <src>... <dest>
COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]


//clear cache
docker-compose run --rm composer dump-autoload  
docker-compose run --rm artisan optimize
docker-compose run --rm artisan config:cache
docker-compose run --rm artisan config:clear
docker-compose run --rm artisan route:clear
docker-compose run --rm artisan view:clear

//update composer
docker-compose run --rm composer update
docker-compose run --rm composer self-update

//start
docker-compose build --no-cache
docker-compose up -d --build
docker-compose run --rm composer install //or docker-compose run --rm composer install --optimize-autoloader --no-dev
docker-compose run --rm php artisan key:generate
docker-compose run --rm artisan migrate
docker-compose run --rm artisan key:generate
npm install && npm run dev//in bash
docker-compose down

```
#add bootstrap
```shell
npm audit fix --force
npm install react-bootstrap bootstrap
npm install Axios bootstrap react-bootstrap

docker-compose run --rm composer require twbs/bootstrap:5.2.0

npm install babel-plugin-react-require --save-dev
npm audit fix --force
npm install eslint-plugin-react-hooks --save-dev 

#install vite
npx @preset/cli apply laravel:vite

```
#permission to see home page
```shell

chmod 775 storage 
chmod 775 storage/app 
chmod 775 storage/framework 
chmod 775 storage/logs 
chmod 775 bootstrap/cache 
chown $USER:www-data storage
chown -R $USER:www-data bootstrap/cache
chown -R www-data:www-data /usr/share/nginx


#error Script @php artisan package:discover --ansi handling the post-autoload-dump event returned with error code
php artisan clear
php artisan dump-autoload

rm -rf vendor
#delete composer.lock file by executing;
rm composer.lock
composer install


chmod +x artisan
```
##How see version laravel
vim ./vendor/laravel/framework/src/Illuminate/Foundation/Application.php

```php
docker-compose run --rm artisan --version
```

# create a new repository on the command line
```php
echo "# docker" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/reihanesaniei/docker.git
git push -u origin main
```
# push an existing repository from the command line
```php
git remote add origin https://github.com/reihanesaniei/docker.git
git branch -M main
git push -u origin main
```
## Some Instructions
```shell
mw prev new //change name and move from prev to new
touch hell.txt //create new file hell.txt
rm file.txt // clear file
rm -r file* // clrear directory
nano file.txt //nano is a editor of text
mkdir storage
chmode U+X deploy:sh //add/remove permission
//create file
touch default.conf
//create directory
mkdir conf.d
//find file && directory
# Find files and directories with names starting with 'snap'
find -name "snap*"

# Find files and directories with names starting with 'snap'
# in case insensitive manner (For example:'Snap', 'snap', 'SNaP', etc.)
find -iname "snap*"

# Find a file named 'snap'
find "snap" -type f
# Find a directory named 'snap'
find "snap" -type d

# Find files only (-type f) and (-and) ensure the names (-name) start with snap
# in the current directory and subdirectories.
find -name "snap*" -and -type f
#create directory
mkdir name
#exit shell mysql
\q 
\exit
\g
#
docker-compose down -v
docker-compose exec php php artisan migrate:fresh
```
#run docker
```shell
docker build -t reactdocker:dev .
#docker build . -t reactimage
docker image ls
docker ps -a
docker run -it -p 3000:3000 371811b84e81
#docker exec -it 371811b84e81 sh
docker run -d -it -–rm -p 3000:3000 -–name [container_name] [image_id/image_tag]
docker run -d -it -p 3000:3000 ec3f9fa604d7 
docker run -it --rm
docker run -itd --rm

```

#update docker
```shell
#to know the exact version of such an image
docker inspect <image_id>
docker stop <container_id>
docker rm <container_id>
docker pull <image_name:image_tag>
docker run <image_name:image_tag>

```
#Stop Docker Run
```shell
#name container
docker stop bb0850e6f433

```

#add package docker
- add package.json
- add package-lock.json
```shell
npm install package-json
npm install
```

#Stop all running Containers
```shell
#Stop all running Containers
docker stop $(docker ps -aq)
#Remove all Containers
docker rm $(docker ps -aq)
#Remove all Stopped Containers
docker ps --filter status=running
docker stop $(docker ps --filter status=running -q)
#or 
docker rm $(docker ps --filter status=exited -q)
```

#Removing all Things
```shell
#delete unused image
docker image prune
#delete all
docker rmi $(docker images -q)
docker system prune -a
docker volume prune
#all container && image && volume
docker down -v   
```
#Error artisan:migrate (mysql)
- user root usually is better .port 3306 is better. because you must change default config
- change volume of mysql in docker-compose.yml
   volumes:
     - "dbdata:/var/lib/mysql/"
     - "./Docker/db:/etc/mysql/my.cnf/"
     -  "./Docker/data/mysql/init.sql:/docker-entrypoint-initdb.d/init.sql"
- add below to docker-compose.yml
  networks:
    sample-network:
      driver: bridge
  volumes:
    dbdata:
      driver: local
- change port, .. in .env  (DB_HOST=mysql)
- check
  sudo vim /etc/hosts -> to edit 127.0.0.1 mysql
  after that, in file .env i change: DB_HOST=localhost to DB_HOST=mysql.
  And It works.
- 

#way of entrance to mysql
```shell
docker ps
#mysql --protocol=tcp -h sample_mysql -P 3308 -u root -p
#docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql/mysql-server:5.7
#docker exec -it mysql_container mysql -u root -p
#mysql --protocol=tcp -h sample_mysql -P 3308 -u root -p
docker exec -it container_Id bash
mysql -u root -p
create DATABASE newDB; 
use newDB; 
SHOW TABLES;
#source /home/dumps/dump.sql

#second way
docker images
docker run -d -p 3306:3306 tutum/mysql   //name image
```
#add a PHPMyAdmin docker-compose.yml
phpmyadmin:
image: phpmyadmin/phpmyadmin
ports:
- '8080:80'
  restart: always
  environment:
  PMA_HOST: db
  depends_on:
- db

phpmyadmin:
image: phpmyadmin/phpmyadmin
ports:
- 8080:80
  environment:
  MYSQL_USERNAME: "${DB_USERNAME}"
  MYSQL_ROOT_PASSWORD: "${DB_PASSWORD}"
  PMA_HOST: mysql
  networks:
- sail

