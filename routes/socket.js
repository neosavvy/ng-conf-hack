var _ = require('lodash-node'),
    cylon = require('cylon');

var earthAPI = (function () {
  var rotate = function () {
    console.log("Rotation API");
  };

  var zoom = function () {
    console.log("ZOOM API");
  };

  return {
    rotate: rotate,
    zoom: zoom
  };
}());


module.exports = function (socket) {

  socket.on('zoom-request', function() {
      console.log("Zooming!!!!");
      socket.emit('zoom', 1)
  })

  socket.on('rotate-request', function() {
      console.log("Rotationating!!!");
      socket.emit('rotate', {});
  })
};
