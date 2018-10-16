require("dotenv").config();
const Koa = require("koa");
const session = require("koa-session");
const serve = require("koa-static");
const mount = require("koa-mount");

const api = require("./api.js");

const app = new Koa();
const PORT = 8000;

app.keys = ["pebble-secret-key"];

app.use(session(app)).use(serve(__dirname + "/view/dist")).use(mount("/api", async (ctx, next) => {
    ctx.body = {};
    await next();
})).use(mount("/api", api));

const server = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = server;
