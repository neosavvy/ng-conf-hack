var Cylon = require('cylon');
var _ = require('lodash-node');

Cylon.robot({
    connection: {
        name: 'leapmotion',
        adaptor: 'leapmotion',
        port: '127.0.0.1:6437'
    },

    device: {
        name: 'leapmotion',
        driver: 'leapmotion'
    },

    work: function (my) {
        /*my.leapmotion.on('hand', function(payload) {
         Logger.info(payload.toString());
         });*/
        /*my.leapmotion.on('gesture', function(gesture) {
         Logger.info(gesture.toString());
         });*/
        /*my.leapmotion.on('frame', function(frame) {
         Logger.info(frame.toString());
         });*/
        var _sample = {};

        var _convert = function _convert(zPalmVelocity) {
            if (zPalmVelocity > 31) {
                return -1;
            } else if (zPalmVelocity < -31) {
                return 1;
            }
            return 0;
        };

        var _sendZoomData = _.throttle(function _sendZoomData() {
            var maxVal = _.max(_sample);
            Logger.info("MAX: " + _.invert(_sample)[maxVal]);
            _sample = {};
        }, 120);

        my.leapmotion.on('hand', function (hand) {
            var val = String(_convert(hand.palmVelocity[2]));
            _sample[val] = _sample[val] || 0;
            _sample[val]++;

            _sendZoomData();
        });
    }
}).start();