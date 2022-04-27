$(document).ready(function() {
    $('.card-slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      rows:2,
      infinite: true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });
  });



  cargarSelect();


  function cargarSelect() {
    $.ajax({
      async: false,
      url: "https://recursos.todos.com.pe/service/ubi-regiones/api-get-all",
      method: "POST",
      
      dataType: "json",
      success: function (respuesta) {
       
        console.log(respuesta)
      
      },
    });
  }

  $(document).ready(function() {
    $(window).scroll(function() {
  
      if ($(window).scrollTop() < $("#banner").height()) {
        $("#header-3").show();//true
        $(".logo:not(#header-3)").hide(); 
        
      } 
      else { 
        $("#scroll2").show();//true
        $(".logo:not(#scroll2)").hide();
  
      }
    });
  });
  


  $.ajax({
    url: "https://geolocation-db.com/json",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
      $('#country').html(location.country_name);
      $('#state').html(location.state);
      $('#city').html(location.city);
      $('#latitude').html(location.latitude);
      $('#longitude').html(location.longitude);
      $('#ip').html(location.IPv4);
    }
  });


  