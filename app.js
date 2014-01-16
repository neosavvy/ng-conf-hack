
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    socket = require('./routes/socket.js'),
    _ = require('lodash-node'),
    cylon = require('cylon'),
    leapmotion = require('./routes/leapmotion.js'),
    spheronJoystick = require('./routes/sphero-joystick.js');

var app = module.exports = express.createServer();

// Hook Socket.io into Express
var io = require('socket.io').listen(app);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Socket.io Communication

var currentSocket = io.sockets.on('connection', socket);

//Leap Motion Device
leapmotion(_, cylon, currentSocket);
//Sphero
spheronJoystick(_, currentSocket);

// Start server

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
