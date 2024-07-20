---
sidebar_position: 4
---

# Node Js installation using NVM

Lets see how can we setup nodejs using nvm on our server (Ubuntu 22.04).


### Step 1: Update Package Repository

```bash
sudo apt-get update
```

### Install Prerequisites

```bash
sudo apt install curl
```

### Download and Install NVM on Ubuntu

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

```
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

### Verify NVM Installation on Ubuntu

```bash
nvm --version
```

### Install Node.js Using NVM

```bash
nvm install --lts
or 
nvm install version
- nvm install 18
```

### Switch Between Node.js Versions
```bash
nvm ls
nvm use <version>
nvm use 18
```


### Install NPM :

```bash
sudo apt-get install npm
```
