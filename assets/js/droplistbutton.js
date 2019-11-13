var button = document.getElementById('drop');
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
button.addEventListener('click', DropDown);
