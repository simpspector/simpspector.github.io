---

title: contributing
layout: default
active_menu: installation

---

# Installation

## Analyser

If you just like to use SimpSpector Analyser CLI, installation is as easy as it gets.

```bash
git clone https://github.com/simpspector/analyser.git
# start simpspecting
analyser/bin/simpspector /path/to/your/project
```

## Application

### Clone Project

```bash
git clone https://github.com/simpspector/simpspector.git
```

### Composer

requires composer to be installed

```bash
composer install # composer will ask you for required configuration paramters
```

### Assets

requires npm and bower to be installed

```bash
cd assets
bower install
npm install
gulp styles js
```

### Initialization

```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
# in order to get semantic webfonts loaded
cd web/css && ln -s ../../assets/bower_components/semantic/dist/themes .
```

## Usage

### Adding .simpspector.yml

You will need to put a configuration file `.simpspector.yml` in your projects root directory. You can find a confoguration reference under [configuration](/configuration)
