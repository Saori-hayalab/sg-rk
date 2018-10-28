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

// Open the Modal
function openModal() {
  document.getElementById('utilizeModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('utilizeModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("utilizeSlides");
  let dots = document.getElementsByClassName("utillizeThumbnail");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
