var next = document.getElementById('next');
var prev = document.getElementById('prev');
var currentSlide = 0;
var slides = [];

let a = document.getElementsByClassName("slide");

for(let i = 0; i < a.length ; i++){
  slides.push(a[i].getAttribute('id'));
}

function goToSlide(n){
  let s = document.getElementById(slides[currentSlide]).className;
  document.getElementById(slides[currentSlide]).className = s.replace('show','');
  currentSlide = (n+slides.length)%slides.length;
  document.getElementById(slides[currentSlide]).className += ' show';
}

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', previousSlide);