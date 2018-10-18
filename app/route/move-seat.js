module.exports = {
    post: async (ctx, next) => {
        if(!ctx.user) {
            ctx.throw(401);
        }
        if(await ctx.db.collection("move-seat-state").count() >= 30) {
            ctx.throw(403);
        }
        await ctx.db.collection("move-seat-state").insertOne({
            user: ctx.user._id
        });
        ctx.body.status = "success";
        await next();
    },
    get: async (ctx, next) => {
        ctx.body = await ctx.db.collection("move-seat-state").find().toArray();
    },
    delete: async (ctx, next) => {
        if(!ctx.user) {
            ctx.throw(401);
        }
        await ctx.db.collection("move-seat-state").deleteOne({
            user: ctx.user._id
        });

        ctx.body.status = "success";
    }
};
