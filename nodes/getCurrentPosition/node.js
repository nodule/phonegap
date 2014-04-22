output = function() {

  navigator.geolocation.getCurrentPosition(function(position) {
    cb( { position: position });
  }, function(err) {
    cb( { error: err });
  }, input);

};
