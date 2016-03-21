output = function() {

  navigator.notification.alert(
    $.message,
    function(arg) {
      cb({ out: arg || null });
    },
    $.title,
    $.buttonName
  );

};
