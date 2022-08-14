// $( 'html' ).on( "load", function() {
// });
$(document).ready(function() {
    $(".loading").fadeOut(1000);
});

$('.scene').each(function() {
    new Parallax(this);
});


AOS.init();

// ************************************
// ************************************sec1
/*
 **
 ** A pen by Alex Buffet
 ** https://alexandrebuffet.fr
 **
 ** Inspired by 
 **
 **
 */

;
(function($) {
    //Make your content a heroe
    $.fn.transformHeroes = function() {
        //Variables
        var perspective = '500px',
            delta = 15,
            width = this.width(),
            height = this.height(),
            midWidth = width / 2,
            midHeight = height / 2;
        //Events
        this.on({
            mousemove: function(e) {
                var pos = $(this).offset(),
                    cursPosX = e.pageX - pos.left,
                    cursPosY = e.pageY - pos.top,
                    cursCenterX = midWidth - cursPosX,
                    cursCenterY = midHeight - cursPosY;

                $(this).css('transform', 'perspective(' + perspective + ') rotateX(' + (cursCenterY / delta) + 'deg) rotateY(' + -(cursCenterX / delta) + 'deg)');
                $(this).removeClass('is-out');
            },
            mouseleave: function() {
                $(this).addClass('is-out');
            }
        });
        //Return
        return this;
    };
}(jQuery));

//Set plugin on cards
$('.card').transformHeroes();
// ************************************
// ************************************sec1
// ************************************sec3
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    keyboard: true,

    breakpoints: {
        // when window width is <= 320px
        360: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        415: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is <= 480px
        1024: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        // when window width is <= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }

});
// ************************************sec3
// ************************************sec3
var swiper = new Swiper(".swiper-news", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 2000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: true,

});
// ************************************sec3