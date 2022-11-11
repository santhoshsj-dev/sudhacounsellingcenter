
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  grabxCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  responsiveclass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

setTimeout(function () {
  $(".preloader").fadeToggle();
}, 1000);
