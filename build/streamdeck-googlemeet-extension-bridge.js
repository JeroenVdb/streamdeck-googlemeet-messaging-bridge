#!/Users/jvandenberghe/.nvm/versions/node/v12.10.0/bin/node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.title = 'googlemeetbridge';
const ws_1 = require("ws");
const webSocketServer = new ws_1.Server({ port: 1987 });
let clients = [];
webSocketServer.on('connection', function connection(ws) {
    ws.on('message', function handleIncomingMessages(message) {
        try {
            const msg = JSON.parse(message);
            if (msg.type === 'identify') {
                clients.push(ws);
            }
            else {
                broadcast(message);
            }
        }
        catch (e) {
            console.error(e);
            broadcast(message);
        }
    });
});
function broadcast(message) {
    clients.forEach((client) => {
        client.send(message);
    });
}
//# sourceMappingURL=streamdeck-googlemeet-extension-bridge.js.map