---

title: Contributing
layout: default
active_menu: contributing

---

# Contributing

First make sure, you have followed the [installation](/installation) instruction, before continueing.

## Windows Development

Since a Linux environment is highly recomended while working on SimpSpector, using Vagrant for setting up a virtual machine under windows is a viable option.

### Vagrant

* Install Vagrant
* Install dev environment e.g. via `https://github.com/DavidBadura/LAMP`

## Test Fixtures

TODO

## GitLab Docker Image

When developing certain aspects of SimpSpector, it will be necessary to have a working installation of gitlab.

* Install docker (on your vm if you are using windows)
* Install gitlab e.g. via `https://github.com/sameersbn/docker-gitlab`

### Fig Configuration

```yaml
postgresql:
  image: sameersbn/postgresql:9.1-1
  environment:
    - DB_USER=gitlab
    - DB_PASS=secretpassword
    - DB_NAME=gitlabhq_production
gitlab:
  image: sameersbn/gitlab:7.4.3
  links:
   - redis:redisio
   - postgresql:postgresql
  ports:
   - "64001:80"
   - "64000:22"
  environment:
   - GITLAB_HOST=gitlab
redis:
  image: sameersbn/redis:latest
```

### GitLab Standard Login

* Username: root
* Password: 5iveL!fe

### SSH Config


```
# ~/.ssh/config
Host gitlab
        HostName 127.0.0.1
        Port 64000
```
