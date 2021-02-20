// $(document).ready(function () {
//   $("td").click(function () {
//     var content = $(this).text();
//     var clickIndex = $(this).index();
//     var atCliff = $("th").eq(clickIndex).text();

//     if (content != "Not Available") {
//       //   $(this).toggleClass("selected");

//       if ($(this).hasClass("selected")) {
//         // $("#displaySelected").css("visibility", "visible");
//         // $("#displaySelected").css("margin-top", "2em");
//         $("#result").append(
//             content +
//             " " +
//             "<span id='atCliff'>at " +
//             atCliff +
//             "</span>"
//         );
//       } else {
//         $("#result p:contains(" + content + ")").remove();

//         // if ($("#result").has("p").length == false) {
//         //   $("#displaySelected").css("visibility", "hidden");
//         //   $("#displaySelected").css("margin-top", "0");
//         // }
//       }
//     }
//   });
// });

$(document).ready(function () {
    $("td").click(function () {
      var content = $(this).text();
      if (content != "Not Available") {
           $("#result").append(content);
      } else {
        $("#result p:contains(" + content + ")").remove();
      }
    });
});
