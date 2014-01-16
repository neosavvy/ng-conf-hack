module.exports = function (_, socket) {
    var sphero = require("spheron").sphero(),
        accel = require("spheron-accel");

    sphero.on("open", function() {
        //console.log('Sphero connected:');

        accel(sphero, {
            rate: 10
        }).on("data", function(data) {
                socket.emit("rotate", data);
            });
    });

    sphero.open("/dev/tty.Sphero-OYG-AMP-SPP");


}