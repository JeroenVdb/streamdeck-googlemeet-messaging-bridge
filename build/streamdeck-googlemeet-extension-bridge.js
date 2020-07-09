#!/Users/jvandenberghe/.nvm/versions/node/v12.10.0/bin/node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.title = 'googlemeetbridge';
const ws_1 = require("ws");
const sockets = [];
const webSocketServer = new ws_1.Server({ port: 1987 });
webSocketServer.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        var msg = JSON.parse(message);
        if (msg.type === 'identify') {
            sockets.push(ws);
        }
        else {
            sockets.forEach((socket) => {
                socket.send(message);
            });
        }
    });
});
//# sourceMappingURL=streamdeck-googlemeet-extension-bridge.js.map