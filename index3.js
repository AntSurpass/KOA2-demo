const Koa = require('koa');
const Router = require('koa-router');
const _fs = require('fs');

const app = new Koa();
const router = new Router();


router.get('/', (ctx, next) => {
    ctx.body = ctx;
})
router.get('/index', (ctx, next) => {
    ctx.body = ctx.url;
})

let home = new Router();
home.get('/page', (ctx, next) => {
    let query = ctx.request.query;
    let querystring = ctx.request.querystring;

    ctx.body = {
        _query: query,
        _querystring: querystring
    }
})

router.use('/home', home.routes(), home.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log(`listrn 3000`);
});