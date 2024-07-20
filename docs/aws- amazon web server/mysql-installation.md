---
sidebar_position: 6
---

# How to setup mysql database on server?

Lets see how to install mysql in ubuntu 22.04 and setup a laravel project.

### Update the package list and install required dependencies

```ssh
sudo apt update
```


### Install MySQL server:

```bash
sudo apt install mysql-server
```

### Secure the MySQL installation:
- After the installation, it's a good practice to run the mysql_secure_installation script to secure your MySQL server. 
- This script will prompt you to configure various settings, such as setting a root password and removing test databases.
```bash
sudo mysql_secure_installation
```
Follow the prompts and provide the necessary information:
- Set a root password (if not set already).
- Remove anonymous users.
- Disallow root login remotely (recommended).
- Remove the test database.
- Reload privilege tables.

### Start and Enable MySQL

```bash
sudo systemctl start mysql
```

### Enable MySQL to start on boot:
```bash
sudo systemctl enable mysql
```

### Check the status of MySQL:

```bash
sudo systemctl status mysql
```

# Access MySQL

### Log in to the MySQL shell as the root user:

```bash 
sudo mysql -u root -p
```

### Create a new user and grant permission
```bash
CREATE USER 'username'@'localhost' IDENTIFIED BY 'PASSWORD';

GRANT ALL PRIVILEGES ON mydatabase.* TO 'username'@'localhost';

FLUSH PRIVILEGES;

```