$(document).ready(() => {
  $("#carousel").on("slid.bs.carousel", () => {
    let index = $(".carousel-item").siblings(".active").index();
    if (index == 30)
      $("#next").text("end");
    else
      $("#next").text("next");
    $(".carousel-pages span").removeClass("active");
    $("span[data-bs-slide-to=" + index + "]").addClass("active");
  });
  $(".menu span").eq(0).click(() => {
    $("#warnings").addClass("invisible");
    $(".carousel-pages").addClass("invisible");
    $("#about").removeClass("invisible");
  });
  $(".menu span").eq(1).click(() => {
    $("#about").addClass("invisible");
    $(".carousel-pages").addClass("invisible");
    $("#warnings").removeClass("invisible");
  });
  $(".back").eq(0).click(() => {
    $("#about").addClass("invisible");
    $(".carousel-pages").removeClass("invisible");
  });
  $(".back").eq(1).click(() => {
    $("#warnings").addClass("invisible");
    $(".carousel-pages").removeClass("invisible");
  });
});
