# Node-Skeleton #
A barebones node.js project. For demonstration!

## Getting Started ##
Lets take a look at the files in this skeleton.

### README.md ###
This file, `README.md` is a Github-Flavoured Markdown document used widely on Github and other source control vendors. (I highly reccomend using version control!)

This files format is defined by [GFM](http://github.github.com/github-flavored-markdown/).

### Package.json ###
Take a look at the `package.json`, it's how you basically declare what your program is, what it needs to run, what it needs for dependencies. Edit it as you please! With a proper `package.json` you have a number of convienences.

**Dependency Management**
Setting a dependency (and installing it):
```shell
    npm install foo --save
```
Setting up a **development** dependency (and installing it):
```shell
    npm install foo --save
```
Uninstalling a dependency: (Also, remove it's entry from your `package.json`)
```shell
    npm uninstall foo
```
Updating Dependencys:
Just edit your `package.json` with the version you want.
Get the latest version of a package:
```shell
    npm info foo version
```
Easily reinstall dependencies:
```shell
    rm -rf node_modules
    npm install
```

**$PATH Helper**:
Getting the program onto your $PATH:
```shell
    npm link
```

### /bin/node-skeleton ###
This file is what is placed on your $PATH when you run `npm link`. All it does is fix the directory to this one, then import `index.js`, which runs the file.

### index.js ###
This is your **main** file for your program. Please see it for details!

### /lib ###
This folder should contain all your other JS files, arrange them however you please!

### /lib/foo.js ###
An example module. Please see it for details!