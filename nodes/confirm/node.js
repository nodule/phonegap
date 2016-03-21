output = function() {

  navigator.notification.confirm(
    $.message,
    function(button) {
      cb({ out: button });
    },
    $.title,
    $.buttonName
  );

};
