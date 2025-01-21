# Getting Started

[[TOC]]

## Prerequisites

If you use one of the following Distros you should be able to follow the tutorial without much Problem.
- Debian
- Ubuntu
- Linux Mint
- Pop OS!
- Kali Linux
- PureOS


> [!IMPORTANT]
> If your Operating System or Distro is not listed than the Project may work on your system but this tutorial does not specify exact steps for a setup.
> If you still want to use this system you have to manually translate these steps.

<!--
Windows / Mac OS / Linux (other distros)
-->

### System Setup

> [!NOTE]
> This step has to be done only once on the machine.

The following command installs the tools necessary to manage and run our tool.

```shell
sudo apt install docker docker-compose  # install system-level dependencies
```

## Setup

The first step is to create a location (directory) where the configuration files and later your data will be stored.
Our recommended location is `/srv/supotsu-no-ochaya/` but you may change that to your preferences.

```shell
sudo -s  # become admin
mkdir -p /srv/supotsu-no-ochaya  # create the directory
cd /srv/supotsu-no-ochaya/  # and go into it for later commands
```

::: code-group
<<< @/files/docker-compose.yaml {yaml} [docker-compose.yaml]
<<< @/files/nginx.conf {nginx} [nginx.conf]
:::

> [!IMPORTANT]
> When you want to upgrade our tool you should check if these files have changed apply these changes.

## First Startup

> [!TIP]
> When you start this normally you have to fill in all data yourself before seeing results and being able to play around.
> If you just want to test this software you can run the following command to download some test-data.
> ```shell
> curl -Ls https://raw.githubusercontent.com/supotsu-no-ochaya/backend/refs/heads/main/download-testdata.sh | bash -- v2
> ```

For the first startup run the following command<sup>[[?]](#commands)</sup>.

```shell
docker-compose up
```

This should pull the required dependencies and start the server.
This allows you to see the logs in your current terminal and detect possible errors.

To stop this you have to press `ctrl+c`.

## Commands

The following commands are used to control the server.

> [!INFO]
> In order to execute these command you need to be sudo (`sudo -s`) and be in the directory of the `docker-compose.yaml` file (`/srv/supotsu-no-ochaya/`).

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
