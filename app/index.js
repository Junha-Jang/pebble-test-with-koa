const Koa = require("koa");
const koaBody = require("koa-body");
const serve = require("koa-static");
const mount = require("koa-mount");

const router = require("./route/index.js");

const app = new Koa();
const PORT = 8888;

app.use(serve(__dirname + "/view/dist")).use(koaBody()).use(mount("/api", router.routes())).use(mount("/api", router.allowedMethods()));

const server = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = server;
