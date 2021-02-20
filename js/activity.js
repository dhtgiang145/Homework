$(document).ready(function () {
  $("td:not(:first-child,:contains('Not Available'))").css("cursor", "pointer");
  $("td:not(:first-child,:contains('Not Available'))").click(function () {
    $(this).toggleClass("selected");
  });
});
