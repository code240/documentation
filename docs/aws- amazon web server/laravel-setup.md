---
sidebar_position: 3
---

# Setup laravel project

Lets see how can we setup laravel project.

Before setting up laravel project, you need to install the php for which you cam follow `php installation` documentation.

### Clone the laravel project

```ssh
sudo git clone https://github.com/laravel/laravel projectName
```

### Install Composer 

```bash
sudo apt install composer
```

### Install php packages

```bash
sudo composer install
```

:::warning Error handling

If you get such issue : 

`PHP Fatal error: Uncaught Error: Class 'Normalizer' not found in /usr/share/php/Symfony/Component/Console/Helper/Helper.php`

Then use the following command
```bash
sudo apt install php-intl
```
#### It requires php-intl to be installed
Normalizer class comes with the php internationalization extension (php-intl). It must be installed for using the Normalizer class.

:::

### Create the environment file 
```
sudo cp ./.env.example ./.env
```
Also you can update the environment variable accordingly.


### Provide Permission 
Provides permission to storage and bootstrap folder.
```bash
sudo chmod 777 -R ./storage ./bootstrap
```

---

# How to setup nginx configuration?

:::tip Lets start

To set up Nginx to serve your Laravel project on the subdomain test.my-domain.com, follow these steps:

:::


### Create Nginx Configuration File:
Create a new Nginx configuration file for your subdomain in the /etc/nginx/sites-available/ directory.

```
sudo nano /etc/nginx/sites-available/test.my-domain.com
```

### Add Configuration:

Add the following configuration to the file, adjusting paths and settings as needed:

```
server {
    listen 80;
    server_name test.my-domain.com;

    root /var/www/html/projects/laravel/public;
    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock; # Adjust this if you're using a different PHP version
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }

    error_log /var/log/nginx/test.my-domain.com.error.log;
    access_log /var/log/nginx/test.my-domain.com.access.log;
}
```
Make sure to replace /var/run/php/php8.2-fpm.sock with the correct path to your PHP-FPM socket if you are using a different version of PHP.


### Enable the Configuration
Create a symbolic link to enable the new configuration:

```
sudo ln -s /etc/nginx/sites-available/test.my-domain.com /etc/nginx/sites-enabled/
```

### Test Nginx Configuration:
Test the Nginx configuration for syntax errors:

```
sudo nginx -t
```

### Restart Nginx

Restart Nginx to apply the changes:
```bash
sudo systemctl restart nginx
```

### Configure DNS:
Ensure that the DNS settings for test.my-domain.com are correctly configured to point to the IP address of your server.



By following these steps, your Laravel project should be accessible via http://test.my-domain.com. If you encounter any issues or need further adjustments, please let me know.











