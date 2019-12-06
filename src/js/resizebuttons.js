
var back = document.getElementById('back');
var frameSize = document.getElementById('viewport');
var resizeButton = document.getElementById('resizeButton');
var state = 'mobile';
var title = '';
var frame = document.getElementsByTagName('iframe')[0];
  frame.onload = ()=>{title = frame.contentWindow.document.title;
    if(title == 'theyalow') {document.body.style.cssText = 'background-color: white'}};


resizeButton.addEventListener('click', () => {
    
    if(state == "desktop"){
     frameSize.setAttribute('width','100%');
     let ButtonIcon = document.getElementById('resizeButton').className;
     document.getElementById('resizeButton').className = ButtonIcon.replace('fa-desktop','fa-mobile');
     state = 'mobile';
    } else {      
     frameSize.setAttribute('width',title == 'theyalow' ? '650px': '375px');
     let ButtonIcon = document.getElementById('resizeButton').className;
     document.getElementById('resizeButton').className = ButtonIcon.replace('fa-mobile','fa-desktop');
     state = 'desktop';
    }
    });
back.addEventListener('click', () => { history.back()})