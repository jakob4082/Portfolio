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

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}