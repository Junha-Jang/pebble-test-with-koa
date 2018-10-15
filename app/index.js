const Koa = require("koa");

const app = new Koa();
const PORT = 8888;

const server = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = server;
