"use strict";

document.addEventListener('DOMContentLoaded', function() {
  var defaultimg = document.querySelector(".img-gallery");
  displayGallery(defaultimg);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  let defaultimg = document.querySelector(".util-img-gallery");


  console.log("document.querySelector('.util-img-gallery')", document.querySelector(".util-img-gallery"))

  let defaulttext = document.querySelector(".util-img-gallery").getAttribute('alt');
  displayUtilGallery(defaultimg, defaulttext);
}, false);


function displayGallery (imgs) {
  var expandImg = document.getElementById("expanded-img");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

function displayUtilGallery (imgs, texts) {
	console.log("clicked!", imgs, texts);
  let expandImg = document.getElementById("expanded-util-img");
  let expandText = document.getElementById("util-expanded-text");

  expandImg.src = imgs.src;
  expandText.innerHTML= texts;
  expandImg.parentElement.style.display = "block";
}
