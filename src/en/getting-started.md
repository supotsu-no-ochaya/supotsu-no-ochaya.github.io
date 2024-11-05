# Getting Started

[[TOC]]

## Prerequisites

This step has to be done only once on the machine.

```shell
sudo apt install docker docker-compose  # install system-level dependencies
```

## Setup

```shell
sudo -s  # become admin
mkdir -p /srv/supotsu-no-ochaya  # create the directory
cd /srv/supotsu-no-ochaya/  # and go into it
```

Now you should create the following files with the following content.

::: code-group
<<< @/files/docker-compose.yaml {yaml} [docker-compose.yml]
<<< @/files/nginx.conf {nginx} [nginx.conf]
:::

## First Startup

For the first startup run the following command<sup>[[?]](#commands)</sup>.

```shell
docker-compose up
```

This should pull the required dependencies and start the server.
This allows you to see the logs in your current terminal and detect possible errors.

To stop this you have to press `ctrl+c`.

## Commands

The following commands are used to control the server.
In order to execute these command you need to be sudo (`sudo -s`) and be in the directory of the `docker-compose.yaml` file (`/srv/supotsu-no-ochaya/`).

### Startup

This command starts the server detached from your current terminal session.
This means that you can close your terminal and the server should continue to be available.
(Even after a reboot.)

```shell
docker-compose up -d
```

### Shutdown

This command stop the server. Even with a reboot of your system it won't start.

```shell
docker-compose down
```

### Updating

The following commands update the server and tools if updates are available.
The `pull` argument pulls the newest version available from the internet.
With `down` and `up -d` you are telling docker to use the newly pulled version.
These two commands are only required if you actually pulled a new version.

```shell
docker-compose pull
docker-compose down
docker-compose up -d
```
