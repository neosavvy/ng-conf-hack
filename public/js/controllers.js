'use strict';

/* Controllers */

function AppCtrl($scope, socket) {

  $scope.sendRotationMessage = function() {
    console.log("sending a rotation message....");
      socket.emit('rotate-request')
  }

  socket.on('rotate', function (data) {
      console.log("data: " + JSON.stringify(data))
      move(data.y, data.x);
  });

  $scope.sendZoomMessage = function() {
    console.log("sending a zoom message....");
      socket.emit('zoom-request')
  }

  socket.on('zoom', function (data) {
      console.log("Catching a zoom!")
      zoom(data);
  });


}
