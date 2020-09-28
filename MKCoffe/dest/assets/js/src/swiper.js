var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

// San Pham
var swiper = new Swiper('.swiper-sp', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    slidesPerView: 1,
    spaceBetween: 5
});

// Chi tiet san pham
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 1,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    thumbs: {
        swiper: galleryThumbs
    }
});

var swiper = new Swiper('.swiper-ctsp-2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 20,
    // slidesPerView: 4,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },
        // 768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        // },
        768: {
            autoplay: {
                delay: 2300,
                disableOnInteraction: false,
            },
        },
        1200: {
            autoplay: {
                delay: 999999,
                disableOnInteraction: false,

            },
        }
    }
});