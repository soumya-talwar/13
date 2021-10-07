$(document).ready(() => {
  $("#carousel").on("slid.bs.carousel", () => {
    let index = $(".carousel-item").siblings(".active").index();
    if (index == 30)
      $("#next").text("end");
    else if (index == 31)
      $("#next").text("start");
    else
      $("#next").text("next");
    $(".carousel-pages span").removeClass("active");
    $("span[data-bs-slide-to=" + index + "]").addClass("active");
  });
  $(".menu span").eq(0).click(() => {
    $("#warnings").addClass("invisible");
    $("#about").removeClass("invisible");
  });
  $(".menu span").eq(1).click(() => {
    $("#about").addClass("invisible");
    $("#warnings").removeClass("invisible");
  });
  $(".back").eq(0).click(() => {
    $("#about").addClass("invisible");
  });
  $(".back").eq(1).click(() => {
    $("#warnings").addClass("invisible");
  });
});
