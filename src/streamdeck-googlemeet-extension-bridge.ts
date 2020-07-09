#!/Users/jvandenberghe/.nvm/versions/node/v12.10.0/bin/node

// Might be good to use an explicit path to node on the shebang line
// in case it isn't in PATH when launched by Chrome

// Thanks https://github.com/simov/native-messaging

process.title = 'googlemeetbridge'

import { Server } from 'ws';

const webSocketServer = new Server({ port: 1987 });

var meetSockets: WebSocket[] = [];
var pluginSockets: WebSocket[] = [];

webSocketServer.on('connection', function connection(ws) {
	ws.on('message', function incoming(message: string) {
		var msg: identifyMessage | actionMessage | muteStateMessage = JSON.parse(message);

		if (msg.type === 'identify') {
			if (msg.value === 'iamameet') {
				// @ts-ignore https://github.com/websockets/ws/issues/1583
				meetSockets.push(ws);
			} else if (msg.value === 'iamtheplugin') {
				// @ts-ignore https://github.com/websockets/ws/issues/1583
				pluginSockets.push(ws);
			}
		} else if (msg.type === 'action') {
			if (meetSockets.length) {
				meetSockets.forEach((meetSocket) => {
					meetSocket.send(message);
				});
			}
		} else if (msg.type === 'muteState') {
			if (pluginSockets.length) {
				pluginSockets.forEach((meetSocket) => {
					meetSocket.send(message);
				});
			}
		}
	});
});

type actionMessage = {
	type: 'action';
	value: string;
};

type muteStateMessage = {
	type: 'muteState';
	value: string;
};

type identifyMessage = {
	type: 'identify';
	value: string;
};
