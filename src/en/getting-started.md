# Getting Started

## Prerequisites

```shell
sudo -s  # become admin
apt install docker docker-compose  # install system-level dependencies
```

## Setup

```shell
mkdir -p /srv/supotsu-no-ochaya  # create the directory
cd /srv/supotsu-no-ochaya/  # and go into it
```

`docker-compose.yml`
```yaml
version: '3.8'

services:
  supotsu-no-ochaya:
    image: ghcr.io/supotsu-no-ochaya/supotsu-no-ochaya
    container_name: supotsu-no-ochaya
    ports:
      - "8080:80"
    restart: on-failure:3
```

## Commands

### Startup

```shell
docker-compose up -d
```

### Shutdown

```shell
docker-compose down
```

### Updating

```shell
docker-compose pull
docker-compose down
docker-compose up -d
```
