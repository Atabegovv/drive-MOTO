$(function () {

  $('.slider-inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  });
  
  $(".tab-item").not(":first").hide();
    $(".search-tabs .tab").click(function() {
      $(".search-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

  $(".fovarite").on('click', function(){
    $(".fovarite").toggleClass("fovarite--active");
  });

  $('.products-tab__item-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
  });

  $(".products-tab__item").not(":first").hide();
    $(".products-tabs__box .products-tab").click(function() {
      $(".products-tabs__box .products-tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".products-tab__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    $(".products-tab__item2").not(":first").hide();
    $(".products-tabs__box2 .products-tab2").click(function() {
      $(".products-tabs__box2 .products-tab2").removeClass("active").eq($(this).index()).addClass("active");
      $(".products-tab__item2").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


  
});