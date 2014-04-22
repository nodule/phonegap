output = function() {

  navigator.notification.alert(
    input.message,
    function(arg) {
      cb({ out: arg || null });
    },
    input.title,
    input.buttonName
  );

};
