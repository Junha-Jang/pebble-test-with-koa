const bcrypt = require("bcrypt");

module.exports = async (ctx, next) => {
    if(!ctx.request.body.email || !ctx.request.body.name || !ctx.request.body.password) {
        ctx.throw(400, {
            status: "Bad Request"
        });
    }
    await ctx.collection.insertOne({
        email: ctx.request.body.email,
        name: ctx.request.body.name,
        password: await bcrypt.hash(ctx.request.body.password, 10)
    });
    ctx.body.status = "success";
    await next();
};
