const Router = require("koa-router");
const router = new Router();

module.exports = router.post("/login", require("./login.js")).post("/signup", require("./signup.js")).get("/move-seat", require("./move-seat.js").get).post("/move-seat", require("./move-seat.js").post).delete("/move-seat", require("./move-seat.js").delete);
