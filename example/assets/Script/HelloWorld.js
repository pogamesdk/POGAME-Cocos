cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
    },

    // use this for initialization
    onLoad: function () {
        window["PO_OPTIONS"] = {
            "gameId": "b4c44585642d451d838a83609fb6e95a",
            "onEvent": function(event) {
                switch (event.name) {
                    case "SDK_READY":
                        // When the SDK is ready.
                        break;
                    case "SDK_ERROR":
                        // When the SDK has hit a critical error.
                        break;
                    case "SDK_GAME_START":
                        // advertisement done, resume game logic and unmute audio
                        break;
                    case "SDK_GAME_PAUSE":
                        // pause game logic / mute audio
                        break;
                    case "SDK_REWARDED_WATCH_COMPLETE":
                        // this event is triggered when your user completely watched rewarded ad
                        break;
                }
            },
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://sdk.pogame.com/posdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'posdk'));
    },

    POShowAd: function () {
        if (typeof posdk !== 'undefined' && posdk.showAd !== 'undefined') {
            posdk.showAd()
            .then(response => {
                // A rewarded ad can be shown to user when he/she clicked it.            })
            })
            .catch(error => {
                // Any Rewarded ad is not available to user.
            });
        }
    },
    POShowRewardedAd: function () {
        if (typeof posdk !== 'undefined' && posdk.showAd !== 'undefined') {
            posdk.showAd('rewarded')
            .then(response => {
                // Ad process done. You can track "SDK_REWARDED_WATCH_COMPLETE" event if that event triggered, that means the user watched the advertisement completely, you can give reward there.
            })
            .catch(error => {
                // An error catched. Please don't give reward here.
            });
        }
    },

    // called every frame
    update: function (dt) {
    },
});
