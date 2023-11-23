[![npm](https://img.shields.io/npm/v/npm.svg)](https://nodejs.org/)
[![GitHub version](https://img.shields.io/badge/version-1.3.0-green.svg)](https://github.com/pogamesdk/POGAME-HTML5/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/pogamesdk/POGAME-HTML5/blob/master/LICENSE)


# POGAME.com COCOS SDK
This is the documentation of the "POGAME.com COCOS SDK" project.

POGAME.com is the biggest collections of high quality, cross-platform games. We provide great games for your website within minutes!

Running into any issues? Check out the F.A.Q. within the Wiki of the github repository before mailing to <a href="support@pogame.com" target="_blank">support@pogame.com</a>

## Implementation within games
The SDK should be integrated within HTML5 games by loading it through our CDN. Specific information of the SDK features and usages can be found at the <a href="https://github.com/pogamesdk/POGAME-Cocos/wiki" target="_blank">wiki</a>.

## Events
### SDK EVENTS
The SDK events should be used by developers to start or pause their game or handling critical errors. Unless the errors are ad related, then they could hook into the AD_ERROR event, however; the SDK should gracefully fail, so this should not be needed.

| Event | Description |
| --- | --- |
| SDK_READY | When the SDK is ready. |
| SDK_ERROR | When the SDK has hit a critical error. |
| SDK_GAME_START | When the game should start. |
| SDK_GAME_PAUSE | When the game should pause. |

### IMA SDK EVENTS
The SDK events are custom ads for handling any thing related to the IMA SDK itself.

| Event | Description |
| --- | --- |

### AD EVENTS
The POGAME.com SDK uses the IMA SDK for loading ads. All events of this SDK are also available to the developer.
https://developers.google.com/interactive-media-ads/docs/sdks/html5/

| Event | Description |
| --- | --- |
| AD_ERROR | When the ad it self has an error. | 
| IMPRESSION | Fired when the impression URL has been pinged. |