# SimpSpector Documentation

http://simplethings.github.io/

## Installation for contributors

**Attention** development is done on branch 'sculpin', not 'master', due to github pages forcing deployment for organization/user pages being done on 'master'. Branch 'sculpin' is set as default branch, so as long as you are not actively switching master, everything should be fine.

### install sculpin

``` bash
    curl -O https://download.sculpin.io/sculpin.phar
    chmod +x sculpin.phar
    sudo mv sculpin.phar /usr/bin/sculpin
```

### install dependencies

``` bash
    sculpin install
```

### run sculpin

``` bash
    sculpin generate --watch --server
```

