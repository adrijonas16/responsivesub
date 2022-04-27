
// Owlcarousel
$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
      loop:true,
    nav:true,



    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
  });
  setOpacity();
});

function setOpacity() {
    var owlCarouselActive = document.getElementsByClassName("owl-item active");
    var first = owlCarouselActive[0]; //get first item
    var last = owlCarouselActive[owlCarouselActive.length - 1]; //get last item
    first.style.opacity = 0.5;
    last.style.opacity = 0.5;
}


[...document.getElementsByClassName("direccion")].forEach(function(e){

    e.innerHTML = e.innerHTML.replace(/(.{1,40})(.*)/g, "$1...");
    
    })
      
  
