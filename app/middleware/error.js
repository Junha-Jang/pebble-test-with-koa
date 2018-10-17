module.exports = (ctx, err) => {
    if(typeof err.message === "number") {
        ctx.throw(err.message);
    } else if(typeof err.message === "object") {
        if(typeof err.message.status === "number" && err.message.msg === "string") {
            ctx.throw(err.message.status, err.message.msg);
        } else if(typeof err.message.callback === "function") {
            err.message.callback(err);
        } else {
            throw err;
        }
    } else {
        throw err;
    }
};
