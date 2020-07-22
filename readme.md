# Google Meet Extension Bridge

This is 1 part of the Google Meet Stream Deck plugin.

You will also need to install

- Stream Deck plugin: https://github.com/JeroenVdb/streamdeck-googlemeet
- the Chrome Extension: https://github.com/JeroenVdb/streamdeck-googlemeet-extension

This "bridge" app sets up a WebSocket server that receives and broadcasts messages from and to the Stream Deck plugin and accompanying extension.

_Developed and tested on MacOS, might need some work for Windows._


## Prerequisite

- Make sure you have [node](https://nodejs.org/) installed get the path to your node binary, you'll need it later at Install [1]

```commandline
which node
```

- Download the latest [release](https://github.com/JeroenVdb/streamdeck-googlemeet-messaging-bridge/releases) of this application and extract

## Install

1. Edit the shebang in `streamdeck-googlemeet-extension-bridge.js` to match the one of your node installation
1. Move `streamdeck-googlemeet-extension-bridge.js` to a location of your choosing, it should stay there
1. Edit `be.jeroenvdb.streamdeckgooglemeet.json` and set the `path` value to the [absolute location](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths) of the `streamdeck-googlemeet-extension-bridge.js` file 
1. Move `be.jeroenvdb.streamdeckgooglemeet.json` to the [appropriate location](https://developer.chrome.com/apps/nativeMessaging#native-messaging-host-location) for your OS

## Troubleshooting

### Google Meet Bridge is not running

After you restart Chrome you should see a process with the name "googlemeetbridge". You can check this via Task Manager or the Activity Monitor app.

Or:
```commandline
ps aux | grep 'googlemeetbridge'
```

## Alternative installation

As an alternative you can also run this application yourself, and not via Google Chrome.

```commandline
./build/streamdeck-googlemeet-extension-bridge.js
```
