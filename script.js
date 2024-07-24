document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var logo = document.querySelector(".logo");

    if (scrollPosition >= 0.5 * window.innerHeight) {
      // 0.6 * window.innerHeight calculates 60vh
      logo.classList.add("show");
    } else {
      logo.classList.remove("show");
    }
  });
});
