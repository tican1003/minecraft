$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    headerHeight = $(".header").outerHeight(true);
    if (scroll >= headerHeight - 80) {
      $(".header__navbar").addClass("scrolled");
    } else {
      $(".header__navbar").removeClass("scrolled");
    }
  });
});
