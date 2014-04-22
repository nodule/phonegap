output = function() {

  navigator.accelerometer.getCurrentAcceleration(function(acceleration) {
    cb( { acceleration: acceleration });
  }, function(err) {
    cb( { error: err });
  }, input);

};
