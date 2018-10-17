const { MongoClient } = require("mongodb");

const errorHandler = require("./error.js");

module.exports = {
    handleError: async (ctx, next) => {
        try {
            await next();
        } catch(e) {
            errorHandler(ctx, e);
        }
    },
    saveCollection: async (ctx, next) => {
        const url = `mongodb://${process.env.PEBBLE_DB_USER}:${process.env.PEBBLE_DB_PW}@ds151292.mlab.com:51292/login-test`;
        const client = await MongoClient.connect(url);
        const db = client.db("login-test");
        const collection = db.collection("login-test");
        ctx.collection = collection;
        await next();
    }
};
