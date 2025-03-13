$(document).ready(function () {
  // tabs
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
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

  const approveModal = document.getElementById("approveModal");
  approveModal.addEventListener("hidden.bs.modal", function () {
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  });
});
