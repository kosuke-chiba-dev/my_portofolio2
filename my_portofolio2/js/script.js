// fv inner (min-width: 900px max-width: 980px) gap: 10px -----------------------------------------
var mediaQuery1 = window.matchMedia("(min-width: 900px) and (max-width: 980px)");
function handleMediaQueryChange1(mediaQuery1){
  if(mediaQuery1.matches){
    $('.fv').find('.inner').css('gap', '10px');
  } else{
    $('.fv').find('.inner').css('gap', '');
  }
}
handleMediaQueryChange1(mediaQuery1);
mediaQuery1.addEventListener('change', handleMediaQueryChange1);

// concept-btn--------------------------------------------
var mediaQuery2 = window.matchMedia("(max-width: 329px)");
function handleMediaQueryChange2(mediaQuery2) {
  if (mediaQuery2.matches) {
    $("#concept-btn").css("margin-left", "0");
  } else {
    $("#concept-btn").css("margin-left", "");
  }
}
handleMediaQueryChange2(mediaQuery2);
mediaQuery2.addEventListener("change", handleMediaQueryChange2);


// concept inner (min-width: 900px) and (max-width: 1050px)  gap: 30px; 
var mediaQuery3 = window.matchMedia("(min-width: 900px) and (max-width: 1050px)");
function handleMediaQueryChange3(mediaQuery3){
  if(mediaQuery3.matches){
    $('.concept').find('.concept-container').css('gap', '30px');
  } else{
$('.concept').find('.concept-container').css('gap', '');
  }
}
handleMediaQueryChange3(mediaQuery3);
mediaQuery3.addEventListener('change', handleMediaQueryChange3);



// swiper-------------------------------------------------
const swiper = new Swiper(".swiper", {

  loop: true,
  slidesPerView: "auto",
  slidesPerView: 1.15, 
  spaceBetween: 18,

  pagination: {
    el: ".swiper-pagination",
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchOverflow: false,
  breakpoints: {
    375: {
      slidesPerView: 1.2603,
    },
    640: {
      slidesPerView: 1.7,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

var mediaQuerySwiper = window.matchMedia("(min-width: 900px)");
function handleMediaQueryChangeSwiper(mediaQuerySwiper){
  var slideCount = $('.swiper-slide').length;
  if(mediaQuerySwiper.matches){
    if(slideCount === 3){
      $('.swiper-button-prev').css('pointerEvents', 'none');
      $('.swiper-button-next').css('pointerEvents', 'none');
    } else{
      $('.swiper-button-prev').css('pointerEvents', '');
      $('.swiper-button-next').css('pointerEvents', '');
    }
  } else{
    $('.swiper-button-prev').css('pointerEvents', '');
    $('.swiper-button-next').css('pointerEvents', '');
  }
}
handleMediaQueryChangeSwiper(mediaQuerySwiper);
mediaQuerySwiper.addEventListener('change', handleMediaQueryChangeSwiper);


// .footer-main 0.69%-------------------------------
var mediaQuery4 = window.matchMedia(
  "(min-width: 1100px) and (max-width: 1230px)"
);
function handleMediaQueryChange4(mediaQuery4) {
  if (mediaQuery4.matches) {
    // $(".footer-main").css("right", "0.69%");
    $(".footer-main").css("right", "1.69%");
  } else {
    $(".footer-main").css("right", "");
  }
}
handleMediaQueryChange4(mediaQuery4);

mediaQuery4.addEventListener('change', handleMediaQueryChange4);


// drawer-----------------------------------------------
$('.hamburger').on('click', function(){
  $(this).toggleClass('active');
$('.drawer').toggleClass('active');
$('html, body').toggleClass('no-scroll');
});


// smoothScroll-------------------------------------------
$('a[href^="#"]').on('click', function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    scrollTop: position
  }, 300);
  // 押したリンクの下に下線を引く処理----------------------------------
  $('.header-nav').find('.header-nav-link-container').removeClass('active');
  $(this).parent().addClass('active');
});

$('.drawer').find('a[href^="#"]').on('click', function(){
  $('.drawer').removeClass('active');
  $('.hamburger').removeClass('active');
  $('html, body').removeClass('no-scroll');
});


// QA-item-----------------------------------
$('.Qarea').on('click', function(){
  $(this).next().slideToggle();
  $(this).find('.Qarea-icon').toggleClass('active');
});

$('.Aarea').on('click', function(){
  $(this).slideToggle();
  $(this).prev().find('.Qarea-icon').toggleClass('active');
});


// company tab------------------------------------------
// 押したタブの色を変える
$('.tab').on('click', function(){
  $('.tab').removeClass('active');
  $(this).addClass('active');

  // 押したタブの何番目の兄弟要素であるかを取得して、その「番号」番目のパネルを表示させる
  var index = $(this).index();
  $('.panel').removeClass('active');
  $('.panel').eq(index).addClass('active');
});

// company panel-1 (max-width: 400px) pl15 pr15------------------------------
var mediaQuery5 = window.matchMedia('(max-width: 400px)');
function handleMediaQueryChange5(mediaQuery5){
  if(mediaQuery5.matches){
    $('.panel-1').css('paddingLeft', '15px');
    $('.panel-1').css('paddingRight', '15px');
  } else{
    $('.panel-1').css('paddingLeft', '');
    $('.panel-1').css('paddingRight', '');
  }
}
handleMediaQueryChange5(mediaQuery5);
mediaQuery5.addEventListener('change', handleMediaQueryChange5);


// panel-td (min-width: 900px) and (max-width: 980px) padding-left: 13px; padding-right: 13px;
var mediaQuery6 = window.matchMedia("(min-width: 900px) and (max-width: 980px)");
function handleMediaQueryChange6(mediaQuery6){
  if(mediaQuery6.matches){
    $('.panel-td').css({
      'paddingLeft': '13px',
      'paddingRight': '13px'
    });
  } else{
    $('.panel-td').css({
      'paddingLeft': '',
      'paddingRight': ''
    });
  }
}
handleMediaQueryChange6(mediaQuery6);
mediaQuery6.addEventListener('change', handleMediaQueryChange6);


// tab-js padding-left: 10px; (max-width: 380px)-------------------------
var mediaQuery7 = window.matchMedia("(max-width: 380px)");
var targetElement7 = $('.tab-js');
function handleMediaQueryChange7(mediaQuery7){
  if(mediaQuery7.matches){
    targetElement7.css('paddingLeft', '10px');
  } else{
    targetElement7.css('paddingLeft', '');
  }
}
handleMediaQueryChange7(mediaQuery7);
mediaQuery7.addEventListener('change', handleMediaQueryChange7);

// tab-arrow left: 7%; (max-width: 350px)--------------------------------
var mediaQuery8 = window.matchMedia("(max-width: 350px)");
function handleMediaQueryChange8(mediaQuery8){
  if(mediaQuery8.matches){
    targetElement7.find('.tab-arrow').css('left', '7%');
  } else{
    targetElement7.find('.tab-arrow').css('left', '');
  }
}
handleMediaQueryChange8(mediaQuery8);
mediaQuery8.addEventListener('change', handleMediaQueryChange8);
