// first slideshow 
var slideIndex = 1;
viewSlides(slideIndex);

function plusSlides(n) {
  viewSlides(slideIndex += n);
}

function viewSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide_option1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// second slideshow
var slideIndex = 1;
viewSlides2(slideIndex);

function pushSlides(n) {
  viewSlides2(slideIndex += n);
}

function viewSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slide_option2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//third slideshow
var slideIndex = 1;
viewSlides3(slideIndex);

function moveSlides(n) {
  viewSlides3(slideIndex += n);
}

function viewSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("slide_option3");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}