const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "hello world"
}).listen(3000);
console.log(" listen 3000");
