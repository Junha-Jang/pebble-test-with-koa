require("dotenv").config();
const Koa = require("koa");
const koaBody = require("koa-body");
const session = require("koa-session");
const serve = require("koa-static");
const mount = require("koa-mount");

const router = require("./route/index.js");
const middleware = require("./middleware/index.js");

const app = new Koa();
const PORT = 8000;

app.keys = ["pebble-secret-key"];

app.use(session(app)).use(serve(__dirname + "/view/dist")).use(mount("/api", async (ctx, next) => {
    ctx.body = {};
    await next();
})).use(mount("/api", koaBody())).use(mount("/api", middleware.saveCollection)).use(mount("/api", router.routes())).use(mount("/api", router.allowedMethods()));

const server = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = server;
