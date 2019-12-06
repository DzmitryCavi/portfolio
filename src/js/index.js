/*resize*/
const resizeButtons = () => {
  var back = document.getElementById('back');
  var frameSize = document.getElementById('viewport');
  var resizeButton = document.getElementById('resizeButton');
  var ButtonState = 'mobile';
  var title = '';
  var frame = document.getElementsByTagName('iframe')[0];
    frame.onload = ()=>{title = frame.contentWindow.document.title;
      if(title == 'theyalow') {document.body.style.cssText = 'background-color: white'}};


  resizeButton.addEventListener('click', () => {
      if(ButtonState == "desktop"){
      frameSize.setAttribute('width','100%');
      let ButtonIcon = document.getElementById('resizeButton').className;
      document.getElementById('resizeButton').className = ButtonIcon.replace('fa-desktop','fa-mobile');
      ButtonState = 'mobile';
      } else {      
      frameSize.setAttribute('width',title == 'theyalow' ? '650px': '375px');
      let ButtonIcon = document.getElementById('resizeButton').className;
      document.getElementById('resizeButton').className = ButtonIcon.replace('fa-mobile','fa-desktop');
      ButtonState = 'desktop';
      }
      });
  back.addEventListener('click', () => { history.back()})
}


/*SLIDER*/

const slider = ()=>{
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
}



/*swiper*/
const swiper = ()=> {
  var startX;
  var startY;
  var endX;
  var endY;
  var treshold = 100; //this sets the minimum swipe distance, to avoid noise and to filter actual swipes from just moving fingers


  //Function to handle swipes
  function handleTouch(start,end, cbL, cbR){
    //calculate the distance on x-axis and o y-axis. Check wheter had the great moving ratio.
    var xDist = endX - startX;
    var yDist = endY - startY;
    console.log(xDist);
    console.log(yDist);
    if(endX - startX < -20){
        cbL();
      }else if (endX - startX > 20){
        cbR();
      }
  }

  //writing the callback fn()
  var left = () =>{   
    style.innerHTML = "h3:before{content:'You swipped left!'}";  
    document.querySelector('.container').style.background = '#D8335B' 
  }
  var right = () =>{
    style.innerHTML = "h3:before{content:'You swipped right!'}";  
    document.querySelector('.container').style.background = '#2C82C9' 
  }
  var up = () =>{
  style.innerHTML = "h3:before{content:'You swipped up!'}"; 
    document.querySelector('.container').style.background = '#2C82C9' 
  }
  var down = () =>{
    style.innerHTML = "h3:before{content:'You swipped down!'}"; 
    document.querySelector('.container').style.background = '#0F3057' 
  }
  var swiper = document.getElementById('swiper');
  //configs the elements on load
  window.onload = function(){
  swiper.addEventListener('touchstart', function(event){
    //console.log(event);
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    //console.log(`the start is at X: ${startX}px and the Y is at ${startY}px`)
    
  })
    
    swiper.addEventListener('touchend', function(event){
    //console.log(event);
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    //console.log(`the start is at X: ${endX}px and the Y is at ${endY}px`)
      
    handleTouch(startX, endX, nextSlide, previousSlide)
    
  })
  }

}


/*droplist*/
const droplist = ()=>{
  var buttonDrop = document.getElementById('drop');
  var active = false;
  function DropDown(){
    if(!active){
      document.getElementById('droplist').className += ' active';
      active = true;
    } else {
      let d = document.getElementById('droplist').className;
      document.getElementById('droplist').className = d.replace(' active','');
      active = false;
    }
  
  }
  buttonDrop.addEventListener('click', DropDown);
}




/*description*/
const description = () => {
  var buttonDesc = document.getElementById('description');
  var state = 'show';
  buttonDesc.addEventListener('click',() => {
    if(state == 'show') {
      let text = button.innerHTML;
      button.innerHTML = text.replace('Show','Hide');
      let elements = document.getElementsByClassName('slide__text');
      for(let i = 0; i < elements.length; i++){
        elements[i].style.display = "flex";
      } 
      state = 'hide';
    } else {
      let text = button.innerHTML;
      button.innerHTML = text.replace('Hide','Show');
      let elements = document.getElementsByClassName('slide__text');
      for(let i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
      } 
      state = 'show';
    }
  });
}

if(document.title == 'frame'){
  description();
  droplist();
  swiper();
  slider();
} else {
  resizeButtons();
}