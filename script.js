$(document).ready(function () {
  $("section").hide().fadeIn(1000);

  $("header h1").hover(function () {
    $(this).css("color", "#ff6f00");
  }, function () {
    $(this).css("color", "white");
  });
});
