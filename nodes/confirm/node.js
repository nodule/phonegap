output = function() {

  navigator.notification.confirm(
    input.message,
    function(button) {
      cb({ out: button });
    },
    input.title,
    input.buttonName
  );

};
