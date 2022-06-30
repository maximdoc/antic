$(function () {

    $('.trends__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        variableWidth: true,
        prevArrow: '.slick__prev',
        nextArrow: '.slick__next',
        dots: false,
    });

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.header__menu-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

});