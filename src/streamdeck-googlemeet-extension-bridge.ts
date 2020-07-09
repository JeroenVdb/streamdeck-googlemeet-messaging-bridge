#!/Users/jvandenberghe/.nvm/versions/node/v12.10.0/bin/node

// Might be good to use an explicit path to node on the shebang line
// in case it isn't in PATH when launched by Chrome

// Thanks https://github.com/simov/native-messaging

process.title = 'googlemeetbridge'

import { Server } from 'ws';

const sockets: WebSocket[] = [];
const webSocketServer = new Server({ port: 1987 });

webSocketServer.on('connection', function connection(ws) {
	ws.on('message', function incoming(message: string) {
		var msg: identifyMessage | actionMessage | muteStateMessage = JSON.parse(message);

		if (msg.type === 'identify') {
			// @ts-ignore
			sockets.push(ws);
		} else {
			sockets.forEach((socket) => {
				socket.send(message);
			});
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
