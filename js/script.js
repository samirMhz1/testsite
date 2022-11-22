// タブ
$(function() {
  $('.qanda__menu li').click(function() {
    var index = $('.qanda__menu li').index(this);
    $('.qanda__menu li, .qanda__wrap').removeClass('is-active');
    $(this).addClass('is-active');
    $('.qanda__wrap').eq(index).addClass('is-active');
  });
});

// アコーディオン
$(function() {
  $('.qanda__itemQ').on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass('is-open');
  });
});

// ハンバーガー
$(function() {
  $('.header__topHum').on('click', function() {
    $('.header__topGnav').toggleClass('is-open');
    $(this).toggleClass('is-open');
  });
});

// ページ内リンク
$(function(){
  $('a[href^="#"]').click(function(){
    var header = $('.header__top').height();
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - header;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// クリックで閉じる
$('.header__topGnav-item a[href]').on('click', function(event) {
  $('.header__topHum').trigger('click');
});

// ヘッダー横スクロール
$(window).on("scroll", function(){
  $(".header__top").css("left", -$(window).scrollLeft());
});