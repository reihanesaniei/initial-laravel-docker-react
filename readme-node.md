#update node 

---



- first install nvm

#install nvm
- first add wget,curl,npm
- second this command for install nvm
```shell
apt update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
wget https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

```
- npm update
# Close and reopen the terminal for system to recognize the changes or run the command:
- source ~/.bashrc
- nvm --version
# Now you can check for newly available releases with:
- nvm ls-remote
#install the latest version, use the nvm command with the specific Node.js version:
- nvm install [version.number]
- npm cache clean -f
- npm install -g n


# continue update node
- n stable
- n latest
#Install a specific version:
- n [version.number]
- wget https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-x64.tar.xz
- apt-get install xz-utils
- tar -C /usr/local --strip-components 1 -xJf node-v16.17.0-linux-x64.tar.xz

# UPDATE NODE DONE ******************************

#start react

```shell
php artisan preset react
composer require laravel/ui

```


