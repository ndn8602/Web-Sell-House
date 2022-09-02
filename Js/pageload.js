const newLocal = $(window).on("load", function () {
  setTimeout(function () {
    $(".page-loader").fadeOut("slow");
  }, 3000);
});
