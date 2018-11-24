var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var PORT = 8080;

server.listen(PORT, () => console.log('Server starts on http://localhost:'+ PORT+'!'));

app.use(express.static('../frontend/dist/frontend'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + './index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    socket.on('event', function (data, res) {
        res({success: true, msg: 'Success.'});
        // if (success) {
        //     res({success: true, msg: 'Success.'});
        // } else {
        //     res({success: false, msg: 'Something went wrong.'});
        // }
    });
});