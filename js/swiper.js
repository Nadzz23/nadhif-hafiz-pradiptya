document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".progress-slide-carousel", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".progress-slide-carousel .swiper-pagination",
      type: "progressbar",
    },
  });
});
