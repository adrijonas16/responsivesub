$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow: $('.prev'),
      nextArrow: $('.next'),
 
  responsive: [
   {
     breakpoint: 1450,
     settings: {
       slidesToShow:5,
       slidesToScroll: 2,
       infinite: true,
     
     }
   },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows:false
     
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: false,
        arrows:false,
     
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    }

    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.responsivemarcas').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow: $('.prev3'),
      nextArrow: $('.next3'),
      centerMode: true,
      focusOnSelect: true,

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
     
      }
    },

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
     
      }
    },
    {
      breakpoint: 675,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
     
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    }

    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.responsivesub').slick({
  dots: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  prevArrow: $('.prev3'),
      nextArrow: $('.next3'),
 
  responsive: [
    {
      breakpoint: 1910,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
     
      }
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
     
      }
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
     
      }
    },

    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
     
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
     
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    }

    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.responsivemov').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow: $('.prev'),
      nextArrow: $('.next'),
      rows:2,
 
  responsive: [
   {
     breakpoint: 1450,
     settings: {
       slidesToShow:5,
       slidesToScroll: 2,
       infinite: true,
     
     }
   },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows:false
     
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: false,
        arrows:false,
     
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow:3,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    }

    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.responsivemovil').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:false,
  rows:2,

 
  responsive: [
   {
     breakpoint: 1400,
     settings: {
       slidesToShow:5,
       slidesToScroll: 2,
       infinite: true,
     
     }
   },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow:3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows:false
     
      }
    },

    {
      breakpoint: 800,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:false
     
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    }

    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}
);


$('.responsive2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:false,
  

 
  responsive: [
   {
     breakpoint: 1400,
     settings: {
       slidesToShow:5,
       slidesToScroll: 2,
       infinite: true,
     
     }
   },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow:3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows:false
     
      }
    },

    {
      breakpoint: 800,
      settings: {
        slidesToShow:4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:false
     
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    }

    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}
);

$(document).ready(function() {
  $('.card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$('.responsive3').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow: $('.prev2'),
      nextArrow: $('.next2'),
 
  responsive: [
   {
     breakpoint: 1400,
     settings: {
       slidesToShow:3,
       slidesToScroll: 1,
       infinite: true,
     
     }
   },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:false
     
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows:false
      }
    }

    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


 /*let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar');
let header2 = document.querySelector('.header-2');

function navToggle(){
  //  menu.classList.toggle('fa-times');
   // navbar.classList.toggle('nav-toggle');
    document.getElementById("prueba2").style.display = "";
}
/*$(document).on("click", "#menu", function () {

  $(this).removeClass("fa-bars");
  $(this).addClass("fa-users");

})*/

/*

window.addEventListener('scroll',function(){

    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');

    if(window.scrollY > 60){
        header2.classList.add('sticky');
    }else{
        header2.classList.remove('sticky');
    }

});*/


$(document).on("click", ".abrirMenu", function () {


  $(this).removeClass("abrirMenu");
  $(this).addClass("quitarMenu");
  document.getElementById("submenu").style.display = "flex";
})

$(document).on("click", ".quitarMenu", function () {


  $(this).removeClass("quitarMenu");
  $(this).addClass("abrirMenu");
  document.getElementById("submenu").style.display = "none";
});



[...document.getElementsByClassName("direccion")].forEach(function(e){

  e.innerHTML = e.innerHTML.replace(/(.{1,50})(.*)/g, "$1...");
  
  })
    
