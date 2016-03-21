output = function() {
  var watchID = navigator.geolocation.watchPosition(function(position) {
    cb( { position: $.create(position) });
  }, function(err) {
    cb( { error: $.create(err) });
  }, input);

  cb( { watchID: $.create(watchID) } );
};
