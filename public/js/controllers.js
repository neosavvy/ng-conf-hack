'use strict';

/* Controllers */

function AppCtrl($scope, socket) {

  $scope.sendRotationMessage = function() {
    console.log("sending a rotation message....");
      socket.emit('rotate-request')
  }

  socket.on('rotate', function (data) {
      console.log("data: " + JSON.stringify(data))
      move(0, 10)
  });

  $scope.sendZoomMessage = function() {
    console.log("sending a zoom message....");
      socket.emit('zoom-request')
  }

  socket.on('zoom', function (data) {
      move(0, 10)
  });


}
