 /* geoloc*/
 
 var geocoder = new google.maps.Geocoder();

 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
   var lat = position.coords.latitude;
   var lng = position.coords.longitude;
   codeLatLng(lat, lng)
}

function errorFunction(){
 
}

 function initialize() {
   geocoder = new google.maps.Geocoder();



 }

 function codeLatLng(lat, lng) {

   var latlng = new google.maps.LatLng(lat, lng);
   geocoder.geocode({'latLng': latlng}, function(results, status) {
     if (status == google.maps.GeocoderStatus.OK) {
     console.log(results)
       if (results[1]) {
        //formatted address
     
       //find country name
            for (var i=0; i<results[0].address_components.length; i++) {
           for (var b=0;b<results[0].address_components[i].types.length;b++) {

           //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
               if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                   //this is the object you are looking for
                    var city= results[0].address_components[i];
                   break;
               }
           }
       }
       //city data
    console.log(city.short_name);
   
    numbers.textContent=city.short_name; 

       } else {
         alert("No results found");
       }
     } else {
       alert("Geocoder failed due to: " + status);
     }
   });
 }
 


 $(document).ready(function(){
  $.ajax({
      type:'GET',
      url:'https://recursos.todos.com.pe/service/ubi-regiones/api-get-all',
      success: function(respuesta){
          for (let i = 0; i < respuesta.data.length; i++) {
              console.log(respuesta.data[i].nombre);
              $('.form-select').append('<option>'+ respuesta.data[i].nombre +'</option>');
          }
          
      },
      error:function(error){
          console.log(error);
      },
 
      
  })

  
})

/*cambiar valores de ubicacion con el select*/

$("#country").change(function (e) {
$("#country2").val($("#country").val());
numbers.textContent=$("#country").val(); 
});

$("#country2").change(function (e) {
$("#country").val($("#country2").val());
numbers.textContent=$("#country2").val(); 
});


/* funciones nuevo navbar */

function llamarUbicacion(){
    var geocoder = new google.maps.Geocoder();

 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
   var lat = position.coords.latitude;
   var lng = position.coords.longitude;
   codeLatLng(lat, lng)
}

function errorFunction(){
 
}

 function initialize() {
   geocoder = new google.maps.Geocoder();

 }

 function codeLatLng(lat, lng) {

   var latlng = new google.maps.LatLng(lat, lng);
   geocoder.geocode({'latLng': latlng}, function(results, status) {
     if (status == google.maps.GeocoderStatus.OK) {
     console.log(results)
       if (results[1]) {
        //formatted address
     
       //find country name
            for (var i=0; i<results[0].address_components.length; i++) {
           for (var b=0;b<results[0].address_components[i].types.length;b++) {

           //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
               if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                   //this is the object you are looking for
                    var city= results[0].address_components[i];
                   break;
               }
           }
       }
       //city data
    console.log(city.short_name);
   
    ubi.textContent=city.short_name; 
    document.getElementById('ubiimg').src = "images/iconos movil 3/iconos todos-02.svg";

       } else {
         alert("No results found");
       }
     } else {
       alert("Geocoder failed due to: " + status);
     }
   });
 }

 
 
};

$(".select").hide();

function llamarSelect(){

    $(".select").show();
            $(".content").hide();
  
 $(document).ready(function(){
    $.ajax({
        type:'GET',
        url:'https://recursos.todos.com.pe/service/ubi-regiones/api-get-all',
        success: function(respuesta){
            
            for (let i = 0; i < respuesta.data.length; i++) {
                console.log(respuesta.data[i].nombre);
                $('.form-select').append('<option>'+ respuesta.data[i].nombre +'</option>');
            }
            
        },
        error:function(error){
            console.log(error);
        },
   
        
    })
  
    
  })



  
};

/*cambiar valores de ubicacion con el select*/

$("#countries").change(function (e) {
    $("#country2").val($("#countries").val());
    ubi.textContent=$("#countries").val(); 
    console.log($("#countries").val())
    });
    
    $("#country2").change(function (e) {
    $("#countries").val($("#country2").val());
    ubi.textContent=$("#country2").val(); 
    });

    /*cambiar tama??o del select*/

    const select = document.querySelector('.cambias')

    select.addEventListener('change', (event) => {
      let tempSelect = document.createElement('select'),
          tempOption = document.createElement('option');
    
      tempOption.textContent = event.target.options[event.target.selectedIndex].text;
      tempSelect.style.cssText += `
          visibility: hidden;
          position: fixed;
          `;
      tempSelect.appendChild(tempOption);
      event.target.after(tempSelect);
      
      const tempSelectWidth = tempSelect.getBoundingClientRect().width;
      event.target.style.width = `${tempSelectWidth}px`;
      tempSelect.remove();
    });
    
    select.dispatchEvent(new Event('change'));
    

 
    /*
    
$("#country").change(function () {

    /* api select departamentos*/
    /*
    $.ajax({
    type:'GET',
    url:'https://recursos.todos.com.pe/service/ubi-regiones/api-get-all',
    success: function(respuesta){
    var cod = document.getElementById("#country").value;
    $(".h2").html(cod)
    
    },
    error:function(error){
    console.log(error);
    },
    
    
    })
    
    });
    */