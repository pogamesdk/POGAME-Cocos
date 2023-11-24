(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/HelloWorld.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld', __filename);
// Script/HelloWorld.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        window.rewardSuccess = false;
        window["PO_OPTIONS"] = {
            "gameId": "b4c44585642d451d838a83609fb6e95a",
            "onEvent": function onEvent(event) {
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
                        rewardSuccess = true;
                        // this event is triggered when your user completely watched rewarded ad
                        break;
                }
            }
        };
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://sdk.pogame.com/posdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'posdk');
    },

    POShowAd: function POShowAd() {
        if (typeof posdk !== 'undefined' && posdk.showAd !== 'undefined') {
            posdk.showAd().then(function (response) {
                // A rewarded ad can be shown to user when he/she clicked it.            })
            }).catch(function (error) {
                // Any Rewarded ad is not available to user.
            });
        }
    },
    POShowRewardedAd: function POShowRewardedAd() {
        if (typeof posdk !== 'undefined' && posdk.showAd !== 'undefined') {
            posdk.showAd('rewarded').then(function (response) {
                // Ad process done. You can track "SDK_REWARDED_WATCH_COMPLETE" event if that event triggered, that means the user watched the advertisement completely, you can give reward there.
            }).catch(function (error) {
                // An error catched. Please don't give reward here.
            });
        }
    },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=HelloWorld.js.map
        