output = function() {
  navigator.accelerometer.getCurrentAcceleration(function(acceleration) {
    cb( { acceleration: $.create(acceleration) });
  }, function(err) {
    cb( { error: $.create(err) });
  }, input);
};
