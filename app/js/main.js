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
    $(this).toggleClass("fovarite--active");
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


    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }


  $(function() {
    $('input, select').styler();
  });


  $(".js-range-slider").ionRangeSlider({
    grid: false,
  });
  
  $(".accordion-panel__btns").on('click', function(){
    $(this).toggleClass("accordion-panel__btns--active");
  });

  $(".tabs-box__item").not(":first").hide();
    $(".catalog__aside-tab .tab").click(function() {
      $(".catalog__aside-tab .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tabs-box__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
});