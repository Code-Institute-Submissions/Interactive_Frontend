{"filter":false,"title":"slide.js","tooltip":"/support/slide.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;","  var slides = document.getElementsByClassName(\"mySlides\");","  var dots = document.getElementsByClassName(\"dot\");","  if (n > slides.length) {slideIndex = 1}","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {","      slides[i].style.display = \"none\";","  }","  for (i = 0; i < dots.length; i++) {","      dots[i].className = dots[i].className.replace(\" active\", \"\");","  }","  slides[slideIndex-1].style.display = \"block\";","  dots[slideIndex-1].className += \" active\";","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":27,"column":1},"end":{"row":27,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1575819497931,"hash":"cb9dd345bc4778d7027c7178704a445bcbfd490b"}