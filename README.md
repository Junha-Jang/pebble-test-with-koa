# Pebble Test using koa
## Initial setup

Clone this repository: 

``` shell
git clone https://github.com/SSHS-pebble/pebble-test-with-koa.git`
```
and install all dependencies:
``` shell
npm i
```

## Project setup
`/app/` is the app's main directory. A directory `/test/` will be made in the future for testing purposes.
`/app/route` is the app's routes. `/app/view` is the app's main page.

The app from `/app/view` is a SPA and dynamically reloads data from the routes from `/app/route`.
The DB for `/app/route` will be saved in an `.env` file.
