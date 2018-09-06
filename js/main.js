"use strict";
document.addEventListener('DOMContentLoaded', function() {
  var defaultimg = document.querySelector(".img-gallery");
  displayGallery(defaultimg);
}, false);

function displayGallery (imgs) {
  var expandImg = document.getElementById("expanded-img");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

//Utilization scenes related functions
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
// Next/previous controls
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
  