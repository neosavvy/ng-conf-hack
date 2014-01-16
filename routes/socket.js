
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

  socket.on('zoom', function() {
      console.log("Zooming!!!!");
      earthAPI.zoom()
  })

  socket.on('rotate', function() {
      console.log("Rotationating!!!");
      earthAPI.rotate()
  })
};
