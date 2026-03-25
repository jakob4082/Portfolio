// Script-Projects.js
// Script for Projects.html - handles image cycling and expansion in galleries

function imgchange(){
    // Cycles to the next image in the Mandalorian gallery sequence
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
    // Cycles to the previous image in the Mandalorian gallery sequence
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
  // Expands the clicked image in a modal overlay for detailed view
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