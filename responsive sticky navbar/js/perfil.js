
[...document.getElementsByClassName("descrip")].forEach(function(e){

    e.innerHTML = e.innerHTML.replace(/(.{1,150})(.*)/g, "$1...");
    
    })