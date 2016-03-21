output = function() {

  navigator.camera.getPicture(function(imageData) {

    cb({ imageData: imageData });

  }, function(err) {

    cb({ error: err });

  }, {
    quality: $.quality,
    sourceType: Camera.PictureSourceType[$.sourceType],
    allowEdit: $.allowEdit,
    encodingType: Camera.EncodingType[$.encodingType],
    targetWidth: $.targetWidth,
    targetHeight: $.targetHeight
  });
};
