onDeviceReady: function() {
    app.receivedEvent('deviceready');
    PushbotsPlugin.initialize("PUSHBOTS_APPID");
}