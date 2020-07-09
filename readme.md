# Google Meet Extension Bridge

This is 1 part of the Google Meet Stream Deck plugin.

You will also need to install

- Stream Deck plugin: https://github.com/JeroenVdb/streamdeck-googlemeet
- the Chrome Extension: https://github.com/JeroenVdb/streamdeck-googlemeet-extension

This "bridge" app sets up a WebSocket server that receives and broadcasts messages from and to the Stream Deck plugin and accompanying extension.

_Developed and tested on MacOS, might need some work for Windows._

## Install

1. Move `be.jeroenvdb.streamdeckgooglemeet.json` to the [appropriate location](https://developer.chrome.com/apps/nativeMessaging#native-messaging-host-location).
1. Make sure `streamdeck-googlemeet-extension-bridge.js` is executable: `chmod +x streamdeck-googlemeet-extension-bridge.js` 
1. Set a correct node shebang path in `streamdeck-googlemeet-extension-bridge.js` 

After you restart Chrome you should see a process with the name "googlemeetbridge".

```commandline
ps aux | grep 'googlemeetbridge'
```
