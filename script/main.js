$(document).ready(function () {
  // tabs
  $(".nav-link").on("click", function (e) {
    // e.preventDefault();
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".like-btn").on("click", function (e) {
    e.preventDefault();
    if ($(this).attr("class").match("fa-regular")) {
      $(this).removeClass("fa-regular");
      $(this).addClass("fa-solid");
    } else {
      $(this).removeClass("fa-solid");
      $(this).addClass("fa-regular");
    }
  });

  $(".show-descr").on("click", function (e) {
    e.preventDefault();
    if ($(this).attr("class").match("show-descr")) {
      $(this).removeClass("show-descr");
      $(this).addClass("hide-descr");
      $(".description__text").css({"height": "100%"})
      $(this).children().css({"transform": "rotate(180deg)"})
    } else {
      $(this).removeClass("hide-descr");
      $(this).addClass("show-descr");
      $(".description__text").css({"height": "155px"})
      $(this).children().css({"transform": "rotate(360deg)"})
    }
  });

  $(".show-charac").on("click", function (e) {
    e.preventDefault();
    if ($(this).attr("class").match("show-charac")) {
      $(this).removeClass("show-charac");
      $(this).addClass("hide-charac");
      $(".characteristics__list").css({"height": "100%"})
      $(this).children().css({"transform": "rotate(180deg)"})
    } else {
      $(this).removeClass("hide-charac");
      $(this).addClass("show-charac");
      $(".characteristics__list").css({"height": "120px"})
      $(this).children().css({"transform": "rotate(360deg)"})
    }
  });

  $(".show-payment").on("click", function (e) {
    e.preventDefault();
    if ($(this).attr("class").match("show-payment")) {
      $(this).removeClass("show-payment");
      $(this).addClass("hide-payment");
      $(".payment__list").css({"height": "100%"})
      $(this).children().css({"transform": "rotate(180deg)"})
    } else {
      $(this).removeClass("hide-payment");
      $(this).addClass("show-payment");
      $(".payment__list").css({"height": "100px"})
      $(this).children().css({"transform": "rotate(360deg)"})
    }
  });

  $(".show-delivery").on("click", function (e) {
    e.preventDefault();
    if ($(this).attr("class").match("show-delivery")) {
      $(this).removeClass("show-delivery");
      $(this).addClass("hide-delivery");
      $(".delivery__list").css({"height": "100%"})
      $(this).children().css({"transform": "rotate(180deg)"})
    } else {
      $(this).removeClass("hide-delivery");
      $(this).addClass("show-delivery");
      $(".delivery__list").css({"height": "60px"})
      $(this).children().css({"transform": "rotate(360deg)"})
    }
  });

  const approveModal = document.getElementById("approveModal");
  approveModal.addEventListener("hidden.bs.modal", function () {
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  });
});
