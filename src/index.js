const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('../routers/chat');
const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));
app.use(express.json());
app.use(router);

let count = 0;

io.on('connection', (socket) => {
    console.log(`New WebSocket Connection`);
    socket.emit('countUpdated', count);
    socket.on('inc', () => {
        count++;
        socket.emit(count);
    });
});

server.listen(port, () => {
    console.log('Server is up on PORT: ' + port);
});
