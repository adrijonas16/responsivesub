const formulario = document.querySelector('#form_datos');
const contacto = document.querySelector('#contacto');
const correo = document.querySelector('#correo');
const ruc = document.querySelector('#ruc');
const razon_social = document.querySelector('#razon_social');
const telefono = document.querySelector('#telefono');
const clave = document.querySelector('#clave');
const registro = document.querySelector('#registro');
const code_input = document.getElementById('code_input');
var id=""


$(document).ready(function(){
    $('#form_datos').submit(function(event){
        $.post("https://recursos.todos.com.pe/service/usuarios/register",
        {
            nombre: contacto.value,
            razon_social: razon_social.value,
            clave: clave.value,
            ruc : ruc.value,
            telefono: telefono.value,
            correo: correo.value,
            enviar_link_verificacion:"",
        },

        function(data, status){
            if(data.success){
                document.getElementById("verificarCodigo").style.display = "block";
                document.getElementById("form_datos").style.display = "none";
                document.getElementById("correover").innerHTML = correo.value;
                mandarCorreo();
            }else{
                alert(data.message);
            }
        });

        event.preventDefault();
    });

});



function mandarCorreo(){
     $.ajax({
         type: 'GET',
         contentType: 'application/json',
         dataType: "json",
         url:'https://recursos.todos.com.pe/service/usuarios/api-get-validation-code/?correo='+correo.value,
            success: function(respuesta){
                id = respuesta.data.id
                console.log(id)
                
            },
            error:function(error){
                alert(error);
            },
     });
}



function validarCorreo(){
    $.ajax({
        method: "GET",
        contentType: 'application/json',
        url: "https://recursos.todos.com.pe/service/usuarios/api-validate-account/?llave_validacion="+code_input.value+"&id="+id,
        success: function (data) {
            if(data.success){
                document.getElementById("verificado").style.display = "block";
                document.getElementById("verificarCodigo").style.display = "none";
                document.getElementById("nombre").innerHTML = contacto.value;
            }else{
                alert(data.message)

               
            }
        },
      
        error:function(data){
            console.log("no aca jeje")
            
        },
      });
      
   
}

const formulario2 = document.querySelector('#form_datos2');
const contacto2 = document.querySelector('#contacto2');
const correo2 = document.querySelector('#correo2');
const ruc2 = document.querySelector('#ruc2');
const razon_social2 = document.querySelector('#razon_social2');
const telefono2 = document.querySelector('#telefono2');
const clave2 = document.querySelector('#clave2');
const registro2 = document.querySelector('#registro2');
const code_input2 = document.getElementById('code_input2');
var id2=""


$(document).ready(function(){
    $('#form_datos2').submit(function(event){
        $.post("https://recursos.todos.com.pe/service/usuarios/register",
        {
            nombre: contacto2.value,
            razon_social: razon_social2.value,
            clave: clave2.value,
            ruc : ruc2.value,
            telefono: telefono2.value,
            correo: correo2.value,
            enviar_link_verificacion:"",
        },

        function(data, status){
            if(data.success){
                document.getElementById("registro2").style.display = "block";
                document.getElementById("form_datos2").style.display = "none";
                document.getElementById("correover2").innerHTML = correo2.value;
                mandarCorreo2();
            }else{
                alert(data.message);
            }
        });

        event.preventDefault();
    });

});



function mandarCorreo2(){
     $.ajax({
         type: 'GET',
         contentType: 'application/json',
         dataType: "json",
         url:'https://recursos.todos.com.pe/service/usuarios/api-get-validation-code/?correo='+correo2.value,
            success: function(respuesta){
                id2 = respuesta.data.id
                console.log(id2)
                
            },
            error:function(error){
                alert(error);
            },
     });
}



function verificar2(){
    var urll="https://recursos.todos.com.pe/service/usuarios/api-validate-account/?llave_validacion="+code_input2.value+"&id="+id2
            console.log(urll)
            console.log(code_input2.value)
    $.ajax({
        method: "GET",
        contentType: 'application/json',
        url: "https://recursos.todos.com.pe/service/usuarios/api-validate-account/?llave_validacion="+code_input2.value+"&id="+id2,
        success: function (data) {

            var urll="https://recursos.todos.com.pe/service/usuarios/api-validate-account/?llave_validacion="+code_input2.value+"&id="+id2
            console.log(urll)
            if(data.success){
                document.getElementById("verificado2").style.display = "block";
                document.getElementById("registro2").style.display = "none";
                document.getElementById("nombre2").innerHTML = contacto2.value;
            }else{
                alert(data.message)

               
            }
        },
      
        error:function(data){
            console.log("no aca jeje")
            
        },
      });
      
   
}