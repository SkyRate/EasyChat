const server = require('server');
const {get, socket} = server.router;
const {render} = server.reply;

const updateCounter = ctx => {
    ctx.io.emit('count', Object.keys(ctx.io.socket.socket).length);
};

server([
    get('/', ctx => render('index.html'))
]);