// Script-Projects.js
function imgchange(){
    var image = document.getElementById("img");
    
    if (image.src.match("img/Mandocoplay1.jpg")){
        image.src = "img/Mandocoplay2.jpg";
    } else if (image.src.match("img/Mandocoplay2.jpg")) {
        image.src = "img/Mandocoplay3.jpg";
    } else {
        image.src = "img/Mandocoplay1.jpg";
    }
}

function imgchangeback(){
    var image = document.getElementById("img");
    
    if (image.src.match("img/Mandocoplay3.jpg")){
        image.src = "img/Mandocoplay2.jpg";
    } else if (image.src.match("iimg/Mandocoplay2.jpg")) {
        image.src = "img/Mandocoplay1.jpg";
    } else {
        image.src = "img/Mandocoplay3.jpg";
    }
}