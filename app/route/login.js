const bcrypt = require("bcrypt");

module.exports = async (ctx, next) => {
    if(!ctx.request.body.email || !ctx.request.body.password) {
        throw new Error(400);
    }

    const user = await ctx.collection.findOne({
        email: ctx.request.body.email
    });

    if(user && await bcrypt.compare(ctx.request.body.password, user.password)) {
        ctx.session.user = user._id;
        ctx.body.status = "success";
    } else {
        throw new Error(401);
    }

    await next();
};
