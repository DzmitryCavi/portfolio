
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
