#!/Users/jvandenberghe/.nvm/versions/node/v12.10.0/bin/node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.title = 'googlemeetbridge';
const ws_1 = require("ws");
const webSocketServer = new ws_1.Server({ port: 1987 });
var meetSockets = [];
var pluginSockets = [];
webSocketServer.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        var msg = JSON.parse(message);
        if (msg.type === 'identify') {
            if (msg.value === 'iamameet') {
                meetSockets.push(ws);
            }
            else if (msg.value === 'iamtheplugin') {
                pluginSockets.push(ws);
            }
        }
        else if (msg.type === 'action') {
            if (meetSockets.length) {
                meetSockets.forEach((meetSocket) => {
                    meetSocket.send(message);
                });
            }
        }
        else if (msg.type === 'muteState') {
            if (pluginSockets.length) {
                pluginSockets.forEach((meetSocket) => {
                    meetSocket.send(message);
                });
            }
        }
    });
});
//# sourceMappingURL=streamdeck-googlemeet-extension-bridge.js.map