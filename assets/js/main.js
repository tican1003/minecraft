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

// Mobile menu

if (window.innerWidth < "740") {
  var mobileMenuList = document.querySelector(".navbar__controls");
  var mobileMenuBtn = document.querySelector(".navbar__menu");
  var mobileMenuIcon = document.querySelector(".navbar__menu div");
  mobileMenuList.style.display = "none";

  mobileMenuBtn.onclick = function () {
    if (mobileMenuList.style.display === "none") {
      mobileMenuList.style.display = "block";
      mobileMenuBtn.style.backgroundColor = "red";
      mobileMenuIcon.classList.remove("ti-menu");
      mobileMenuIcon.classList.add("ti-close");
    } else {
      mobileMenuList.style.display = "none";
      mobileMenuBtn.style.backgroundColor = "#333";
      mobileMenuIcon.classList.remove("ti-close");
      mobileMenuIcon.classList.add("ti-menu");
    }
  };
}

// Mobile menu items

var menuItems = document.querySelectorAll(".navbar__control-item a");
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function () {
    mobileMenuList.style.display = "none";
    mobileMenuBtn.style.backgroundColor = "#333";
    mobileMenuIcon.classList.remove("ti-close");
    mobileMenuIcon.classList.add("ti-menu");
  };
}
