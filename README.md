# Pebble Test using koa
## Initial setup

Clone this repository: 

``` shell
git clone https://github.com/SSHS-pebble/pebble-test-with-koa.git
cd pebble-test-with-koa
```

and install all dependencies:

``` shell
npm i
```

To bundle, install parcel: 

``` shell
npm i -g parcel
```

Bundle:

``` shell
npm run build
```

and start server:

``` shell
node ./app/index.js
```

[The app](http://localhost:8000) runs on port 8000 on localhost.

You need an env file in the `./` directory. The format is like this:

``` shell
PEBBLE_DB_USER="pebble-db-user"
PEBBLE_DB_PW="pebble-db-pw"
```

### Frontend

The frontend files directory is `/app/view`. Parcel bundling with babel is configured to output files in `app/view/dist`.
Bundling while developing: 

``` shell
npm run dev-build
```

Building when deploying:

``` shell
npm run build
```

## Project setup

`/app/` is the app's main directory. A directory `/test/` will be made in the future for testing purposes.
`/app/route` is the app's API routes. `/app/view` is the app's main page.

The app from `/app/view` is a SPA and dynamically reloads data by requesting from APIs, mounted on `/api`.
