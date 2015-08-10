
# fixed-object

> Make an object immutable! Just that! No more crap!

[![node](https://img.shields.io/node/v/fixed-object.svg?style=flat-square)](https://www.npmjs.com/package/fixed-object) [![npm](https://img.shields.io/npm/v/fixed-object.svg?style=flat-square)](https://www.npmjs.com/package/fixed-object) [![Travis](https://img.shields.io/travis/GochoMugo/fixed-object.svg?style=flat-square)](https://travis-ci.org/GochoMugo/fixed-object) [![Gemnasium](https://img.shields.io/gemnasium/GochoMugo/fixed-object.svg?style=flat-square)](https://gemnasium.com/GochoMugo/fixed-object) [![Coveralls](https://img.shields.io/coveralls/GochoMugo/fixed-object.svg?style=flat-square)](https://coveralls.io/github/GochoMugo/fixed-object?branch=master)


## install:

```bash
$ npm install fixed-object
```

## make immutable:

```json
{
    "name": "gochomugo"
}
```

```js
var fixedobj = require("fixed-object");
var config = fixedobj(require("./config.json"));

console.log(config); // => { name: 'gochomugo' }

config.name = "sheldon cooper"; // => TypeError: Cannot assign to read only property 'name' of #<Object>

console.log(config); // => { name: 'gochomugo' }
```


## how is it useful?

I find this useful when loading configuration files. We usually **never** intend to mutate configuration objects. **But** if you accidentally do, you can imagine the shit crap your application will go through before you realize where you messed up.


## license:

__The MIT License (MIT)__

Copyright (c) 2015 GochoMugo <mugo@forfuture.co.ke>
