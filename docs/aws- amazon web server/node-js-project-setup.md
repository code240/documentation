---
sidebar_position: 5
---

# How to setup nodejs project?

Lets see how can we setup nodejs project on our server using nginx (Ubuntu 22.04).


### Install dependencies

```bash
sudo npm install 
```


### Install pm2 globally
```bash
npm install -g pm2
```

### Start your application with PM2:

```bash
pm2 start index.js --name "your-node-app"
```

### Save the PM2 process list and enable PM2 to start on boot
```bash
pm2 save
pm2 startup systemd
```


# Configure Nginx

### Create a new Nginx configuration file for your subdomain
```bash
sudo nano /etc/nginx/sites-available/test-node.webwings.tech
```

### Add the following configuration

```
server {
    listen 80;
    server_name test-node.webwings.tech;

    location / {
        proxy_pass http://localhost:3000;  # Assuming your Node.js app is running on port 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_log /var/log/nginx/test-node.webwings.tech.error.log;
    access_log /var/log/nginx/test-node.webwings.tech.access.log;
}

```
### Enable the new configuration by creating a symbolic link:

```bash 
sudo ln -s /etc/nginx/sites-available/test-node.webwings.tech /etc/nginx/sites-enabled/
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

Ensure that the DNS settings for test-node.webwings.tech are correctly configured to point to the IP address of your server.

