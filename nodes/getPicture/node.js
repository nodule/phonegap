output = function() {

  navigator.camera.getPicture(function(imageData) {

    cb({ imageData: imageData });

  }, function(err) {

    cb({ error: err });

  }, {
    quality: input.quality,
    sourceType: Camera.PictureSourceType[input.sourceType],
    allowEdit: input.allowEdit,
    encodingType: Camera.EncodingType[input.encodingType],
    targetWidth: input.targetWidth,
    targetHeight: input.targetHeight
  });
};
