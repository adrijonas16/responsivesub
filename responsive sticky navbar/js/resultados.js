// $(function() {

// });

$(".responsivemarcas").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: $(".prev3"),
  nextArrow: $(".next3"),
  centerMode: true,
  focusOnSelect: true,

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 675,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const $opts = {
  dots: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow: $(".prev3"),
  nextArrow: $(".next3"),

  responsive: [
    {
      breakpoint: 1910,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },

    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

const categoria_id = 130;

$.ajax({
  async: false,
  url:
    "https://recursos.todos.com.pe/service/categorias/api-get-subcategories/?categoria_id=" +
    categoria_id,
  method: "GET",
  dataType: "json",
  success: function (respuesta) {
    $(".responsivesub").slick("unslick");

    for (let i = 0; i < respuesta.data.length; i++) {
      if (respuesta.data[i].ruta_icono == "") {
        $("#subcategoriasia").append(
          '<div class="sub" id="subcategoriasi">' +
            '<div class="tipos" >' +
            '<img src="images/iconos/abogados.svg">' +
            "</img>" +
            "<h1>" +
            respuesta.data[i].nombre +
            "</h1>" +
            "</div>" +
            "</div>"
        );
      } else {
        $("#subcategoriasia").append(
          '<div class="sub" id="subcategoriasi">' +
            '<div class="tipos" >' +
            '<img src="respuesta.data[i].ruta_icono">' +
            "</img>" +
            "<h1>" +
            respuesta.data[i].nombre +
            "</h1>" +
            "</div>" +
            "</div>"
        );
      }
    }
    
    $("#subcategoriasia").addClass('responsivesub')
    $(".responsivesub").slick($opts);

    console.log(respuesta);
  },

  error: function (error) {
    console.log(error);
  },
});

const correo = "";
$.ajax({
  async: false,
  url:
    "https://recursos.todos.com.pe/service/usuarios/api-get-validation-code/?" +
    correo,
  method: "GET",

  dataType: "json",
  success: function (respuesta) {
    console.log(respuesta);
  },

  error: function (error) {
    console.log(error);
  },
});

const codigo = "";
const id = "";
$.ajax({
  async: false,
  url:
    "https://recursos.todos.com.pe/service/usuarios/api-validate-account/?llave_validacion=" +
    codigo +
    "&amp;id=" +
    id,
  method: "GET",

  dataType: "json",
  success: function (respuesta) {
    console.log(respuesta);
  },

  error: function (error) {
    console.log(error);
  },
});
