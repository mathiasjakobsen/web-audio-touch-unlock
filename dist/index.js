"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function webAudioTouchUnlock(context) {
    if (!context || !(context instanceof (window.AudioContext || window.webkitAudioContext))) {
        console.error('webAudioTouchUnlock - You need to pass an instance of AudioContext to this method call!');
        return;
    }
    if (typeof context.state !== 'string') {
        console.warn('webAudioTouchUnlock - Seems like this approach can not be used with current ' +
            'implementation of AudioContext. We\'re sorry about that, however you can open an issue here: ' +
            'https://github.com/pavle-goloskokovic/web-audio-touch-unlock/issues and we\'ll try to sort it out.');
        return;
    }
    if (context.state === 'suspended') {
        var unlock_1 = function () {
            document.body.removeEventListener('touchstart', unlock_1);
            context.resume();
        };
        document.body.addEventListener('touchstart', unlock_1, false);
    }
}
exports.default = webAudioTouchUnlock;