output = function() {

  var watchID = navigator.geolocation.watchPosition(function(position) {
    cb( { position: position });
  }, function(err) {
    cb( { error: err });
  }, input);

  cb( { watchID: watchID } );

};
