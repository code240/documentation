---
sidebar_position: 7
---

# How to setup reactjs project?

Lets see how can we setup reactjs project on our server using nginx (Ubuntu 22.04).


### Install dependencies

```bash
sudo npm install 
```


### Create build
```bash
npm run build
```
Now configure build path to the nginx configuration.


# Configure Nginx

### Create a new Nginx configuration file for your subdomain
```bash
sudo nano /etc/nginx/sites-available/test-react.webwings.tech
```

### Add the following configuration

```
server {
    listen 80;
    server_name test-react.webwings.tech; #  Replace it with your own domain 

    root /var/www/html/projects/react/build; # Replace with the path to your build directory
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_log /var/log/nginx/react-app.error.log;
    access_log /var/log/nginx/react-app.access.log;
}

```

### Enable the new configuration by creating a symbolic link:

```bash 
sudo ln -s /etc/nginx/sites-available/test-react.webwings.tech /etc/nginx/sites-enabled/
```

### Test the Nginx configuration:

```bash
sudo nginx -t
```


### Restart Nginx to apply the changes

```bash
sudo systemctl restart nginx
```

### Configure DNS

Ensure that the DNS settings for test-react.webwings.tech are correctly configured to point to the IP address of your server.

