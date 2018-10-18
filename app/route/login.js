const bcrypt = require("bcrypt");

module.exports = async (ctx, next) => {
    if(!ctx.request.body.email || !ctx.request.body.password) {
        ctx.throw(400);
    }

    const user = await ctx.userCollection.findOne({
        email: ctx.request.body.email
    });

    if(user && await bcrypt.compare(ctx.request.body.password, user.password)) {
        ctx.session.user = user._id;
        ctx.body.status = "success";
    } else {
        ctx.throw(401);
    }

    await next();
};
