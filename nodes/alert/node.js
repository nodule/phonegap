output = function() {
  navigator.notification.alert(
    $.message,
    function(arg) {
      cb({ out: $.create(arg || null) });
    },
    $.title,
    $.buttonName
  );
};
