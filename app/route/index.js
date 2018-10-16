const Router = require("koa-router");
const router = new Router();

module.exports = router.post("/login", require("./login.js"));
