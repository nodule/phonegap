output = function() {
  navigator.camera.getPicture(function(imageData) {
    cb({ imageData: $.create(imageData) });
  }, function(err) {
    cb({ error: $.create(err) });
  }, {
    quality: $.quality,
    sourceType: Camera.PictureSourceType[$.sourceType],
    allowEdit: $.allowEdit,
    encodingType: Camera.EncodingType[$.encodingType],
    targetWidth: $.targetWidth,
    targetHeight: $.targetHeight
  });
};
