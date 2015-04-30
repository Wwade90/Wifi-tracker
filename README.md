### Wifey

Wifey keeps tabs on all of your WIFI connections.


### Installation

- Install Meteor:

```sh
$ curl https://install.meteor.com | /bin/sh
```

- Git clone this repo and cd into it.

```sh
$ git clone https://github.com/josephdburdick/wifey.git
$ cd wifey/app
```

- Run meteor with settings.json:

```sh
$ meteor --settings ../config/development/settings.json
```

- High five the nearest civilian.

### Debugging
Want to debug server side code?

- Install node-inspector:

```sh
$ npm install node-inspector -g
```

- Run meteor debug with settings.json:

```sh
$ meteor debug --settings ../config/development/settings.json
```

#### Protips
Instead of writing this meteor command out manually you can save it as an alias in your ~/.bashrc or ~/.zshrc file:

```
alias irondebug="meteor debug --settings ../config/development/settings.json"
```
Then run `irondebug` in your terminal to automatically load the app with debugging enabled and dev settings.

Also if you want to quickly run the app with settings and quickly generate stuff like views, controllers, collections, routes, etc check out [iron-cli](https://github.com/iron-meteor/iron-cli).
