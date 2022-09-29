$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__bmenu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

//scroll fluide
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
