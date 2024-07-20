---
sidebar_position: 1
---

# Php installation

Lets see how to install php8.2 in ubuntu 22.04 and setup a laravel project.

### Update the package list and install required dependencies

```ssh
sudo apt update
sudo apt upgrade -y
sudo apt install -y software-properties-common
```

### Add the PHP 8.2 repository 

```ssh
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

### Install PHP 8.2 and necessary extensions:

```ssh
sudo apt install -y php8.2
```

### Install common PHP extensions:

```ssh 
sudo apt install -y php8.2-cli php8.2-fpm php8.2-mysql php8.2-xml php8.2-curl php8.2-mbstring php8.2-zip php8.2-intl php8.2-gd
```


### Verify the PHP installation:

```ssh
php -v
```
---
### Configure PHP-FPM (Optional) (If needed):

- Open the PHP-FPM configuration file:
```ssh
sudo nano /etc/php/8.2/fpm/php.ini

sudo systemctl restart php8.2-fpm
```
---













