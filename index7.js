const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set('he', 'mycookie', {
            domain: 'localhost',
            path: '/',
            maxAge: 2 * 60 * 60 * 1000,
            expires: new Date('2019-2-9'),
            httpOnly: false,
            overwrite: false
        });
        ctx.body = 'cookies is ok';
    } else {
        if ( ctx.cookies.get('he')) {
           ctx.body =  ctx.cookies.get('he');
        } else {
            ctx.body =  'cookie is none';
        }
    }
});
app.listen(3000, ( )=> {
    console.log('listen 3000');
    
})