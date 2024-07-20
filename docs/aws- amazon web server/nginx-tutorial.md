---
sidebar_position: 1
---

# Nginx tutorial


To install and set up Nginx on an AWS EC2 instance running Ubuntu, follow these steps:

#### Update Package List:

```ssh 
sudo apt update
```
### Install Nginx:
```
sudo apt install -y nginx
```

### Start Nginx Service
```
sudo systemctl start nginx
```

### Enable Nginx to Start on Boot:

```
sudo systemctl enable nginx
```

### Check Nginx Status:

```
sudo systemctl status nginx
```

### Configure Firewall (if using UFW):

Allow HTTP and HTTPS traffic:

```
sudo ufw allow 'Nginx Full'
```

### Verify Nginx Installation

Open a web browser and navigate to your EC2 instance's public IP address. You should see the Nginx default welcome page.

### Configure Nginx (Optional):

- The default configuration file is located at `/etc/nginx/sites-available/default`.
- Edit this file to configure your server blocks (virtual hosts):

```
sudo nano /etc/nginx/sites-available/default
```

### After making changes, test the Nginx configuration:

This script checks if the Nginx configuration file has any syntax errors

```
sudo nginx -t
```


### Reload nginx : 

Reload Nginx to apply the changes:
```
sudo systemctl reload nginx
```
With these steps, Nginx should be installed and running on your AWS EC2 instance. You can now configure it to serve your web applications or sites.


##### If you want to open nginx default page on your domain, Then edit `sudo nano /etc/nginx/sites-available/default` and add `server_name https://example.com;`.


### To stop nginx : 

```
sudo systemctl stop nginx
```

### Disable nginx : 

```
sudo systemctl disable nginx
```

### Remove Nginx Packages:

To remove Nginx and its associated packages, use the following command:

```
sudo apt remove --purge nginx nginx-common nginx-full
```

### Remove Dependencies (Optional):
If you want to remove unused dependencies that were installed with Nginx, you can run:

```
sudo apt autoremove
```
### Delete Remaining Configuration Files and Directories

```
sudo rm -rf /etc/nginx
sudo rm -rf /var/log/nginx
sudo rm -rf /var/www/html
```

### Verify Removal:

Ensure that Nginx is no longer installed:

```
which nginx
```

### Update Package Lists (Optional):

Update the package lists to reflect the changes:

```
sudo apt update
```




### Check access logs : 

```
sudo tail -f /var/log/nginx/access.log
```


### Check error logs :
```
sudo tail -f /var/log/nginx/error.log
```