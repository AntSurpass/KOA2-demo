const Koa = require('koa');
const Fs = require('fs');

const app = new Koa();

app.use(async (ctx) => {
    let url = ctx.request.url
    let html = await router(url);
    ctx.body = html;
}).listen(3000);

async function router(url) {
    console.log(url);
    
    let page = "404.html";
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/log':
            page = 'log.html';
            break;
        case '/user':
            page = 'user.html';
            break;
        case '/mon':
            page = 'mon.html';
            break;
        default:
            break;
    }
    let html = await reader(page);
    return html;
}
function reader(page) {
    console.log(page);
    
    return new Promise((resolve, reject) => {
        let pageurl = `./demo/${page}`;
        Fs.readFile(pageurl, "binary", (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
}

console.log("listrn 3000");