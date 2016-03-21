output = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    cb( { position: $.create(position) });
  }, function(err) {
    cb( { error: $.create(err) });
  }, input);
};
