const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.custom-btn-next',
        prevEl: '.custom-btn-prev',
    },
});