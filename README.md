# walmartlabs-store-server
### Quick Start

* Development
    - Run on development environment
    ```
    npm install; npm start
    ```

* Production 
    - Deploy on production environment
    ```
    sh start.sh
    ```
    - Stop on production environment
    ```
    sh stop.sh
    ```

* APIs (Docs https://documenter.getpostman.com/view/2922882/walmartlabs/RW83NBN5)

    ```
    localhost:3000/api/v1/keyword/backpack
    ```

#### Project structure
```
.
├── README.md
├── package-lock.json
├── package.json
├── server.js               # Entry point
├── src                     # src code
│   ├── config              # config for running environment
│   │   └── constants.js
│   ├── controllers         # Controller layer
│   │   ├── config.js
│   │   └── keyword.js
│   └── test
│       └── test.js         # mocha
│   └── routes              # Router layer
│       ├── error_routes.js # error routes
│       ├── index.js        # Wrapper all route as a center
│       └── keyword.js      # keyword router
├── start.sh                # run App on production server
└── stop.sh                 # stop App on production server 
```
### Reference
* [Hapi](https://www.npmjs.com/package/hapi)
* [Request](https://www.npmjs.com/package/request)
* [Async](https://www.npmjs.com/package/async)
* [Hapi Demo](https://github.com/espiderinc/hapi-rest-demo)
* [csvtojson](https://www.npmjs.com/package/csvtojson)
* [memory-cache](https://www.npmjs.com/package/memory-cache)
* [mocha](https://www.npmjs.com/package/mocha)
