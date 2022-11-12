
setTimeout(function () {
  $('.preloader-bg').fadeToggle();
}, 3000);









window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".navbar-dropdown").slideToggle("slow");

      // Close dropdown when select another dropdown
      $(".navbar-dropdown").not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });
  });
})(jQuery);

$(document).ready(function () {

  $("#owl-demo").owlCarousel({

    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false
  });

});


$(".theraphy-img").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  responsiveclass: true,
  nav: true,
  navText: [$('.am-prev'), $('.am-next')],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});


$('img[data-enlargable]').addClass('img-enlargable').click(function () {
  var src = $(this).attr('src');
  $('<div>').css({
    background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
    backgroundSize: 'contain',
    width: '100%', height: '100%',
    position: 'fixed',
    zIndex: '10000',
    top: '0', left: '0',
    cursor: 'zoom-out'
  }).click(function () {
    $(this).remove();
  }).appendTo('body');
});

$(".testimonial_content").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
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
      items: 3,
    },
  },
});


