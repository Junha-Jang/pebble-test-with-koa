const { MongoClient, ObjectId } = require("mongodb");

module.exports = {
    getDB: async (ctx, next) => {
        const url = `mongodb://${process.env.PEBBLE_DB_USER}:${process.env.PEBBLE_DB_PW}@ds235243.mlab.com:35243/pebble-db`;
        ctx.client = await MongoClient.connect(url);
        ctx.db = ctx.client.db("pebble-db");
        ctx.userCollection = ctx.db.collection("users");
        await next();
    },
    getUser: async (ctx, next) => {
        ctx.user = await ctx.userCollection.findOne({
            _id: ObjectId(ctx.session.user)
        });

        await next();
    }
};
