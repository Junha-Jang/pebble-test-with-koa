const Koa = require("koa");
const koaBody = require("koa-body");

const router = require("./route/index.js");
const middleware = require("./middleware/index.js");

const api = new Koa();

api.use(async (ctx, next) => {
    ctx.body = {};
    await next();
}).use(koaBody()).use(middleware.saveCollection).use(router.routes()).use(router.allowedMethods());

module.exports = api;
