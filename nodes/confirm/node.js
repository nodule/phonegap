output = function() {
  navigator.notification.confirm(
    $.message,
    function(button) {
      cb({ out: $.create(button) });
    },
    $.title,
    $.buttonName
  );
};
