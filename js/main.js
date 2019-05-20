//Responsive Nav
$(function() {
  menu = $("nav ul");

  $("#openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

// Smooth scrolling nav bar
$(".cf a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

//Animate Smooth button scrolling
//View Designs
$("#view-designs").on("click", function() {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});

//Create Account
$("#create_account").on("click", function() {
  const create = $("#create").position().top;

  $("html, body").animate(
    {
      scrollTop: create
    },
    900
  );
});
