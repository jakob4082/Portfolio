function imgchange(){
    var image = document.getElementById("img");
    
    if (image.src.match("Mimg/Mando_coplay (1).jpg")){
        image.src = "img/Mando_coplay (2).jpg";
    } else if (image.src.match("img/Mando_coplay (2).jpg")) {
        image.src = "img/Mando_coplay (3).jpg";
    } else {
        image.src = "img/Mando_coplay (1).jpg";
    }
}

function imgchangeback(){
    var image = document.getElementById("img");
    
    if (image.src.match("img3.png")){
        image.src = "img2.png";
    } else if (image.src.match("img2.png")) {
        image.src = "img1.png";
    } else {
        image.src = "img3.png";
    }
}