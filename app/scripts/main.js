$( '.bar-hidden-cta' ).click(function() {
    console.log('ddd');
   $(this).siblings('.content-hidden' ).toggle( 'slow' );
});

$( 'a' ).click(function( event ) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
});

// Initialize Swiper
  var swiper = new Swiper('.swiper-container-bidding', {
    slidesPerView: 4,
    spaceBetween: 30,
    // init: false,
    pagination: {
      el: '.swiper-pagination-bidding',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-bidding',
        prevEl: '.swiper-button-prev-bidding',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      766: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
});


var swiper2 = new Swiper('.swiper-container-testimony', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination-testimony',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('#nombre').keypress(function(tecla) {
    if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45) && (tecla.charCode != 209) && (tecla.charCode != 241) && (tecla.charCode != 32)) return false;
  });
