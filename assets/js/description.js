var button = document.getElementById('description');
var state = 'show';
button.addEventListener('click',() => {
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