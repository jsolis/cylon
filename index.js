var Cylon = require('cylon');

// Initialize the api
Cylon.api('http');

// Initialize the robot
Cylon.robot({
  name: 'dorito',

  connections: {
    spark: { adaptor: 'spark', accessToken: '906b49385e4a37206a226033500a4e3e20bbeef3', deviceId: '29003e000747343339373536' }
  },

  devices: {
    led: { driver: 'led', pin: 'D7'}
  },

  //work: function(my) {
  //  every((1).second(), function() {my.led.toggle()});
  //}

  toggle: function() {
    this.led.toggle();
  }

}).start();
