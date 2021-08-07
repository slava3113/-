$(function () {
  $(".top__slider").slick({
    dots: false,
    arrows: true,
  });
  $(".slider-brands__items").slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 3,
  });

  var mixer = mixitup(".assortment__item", ".stocks__items");
});
