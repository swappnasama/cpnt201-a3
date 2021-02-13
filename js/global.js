// variable decleration
let circleGradient=document.querySelector('#lineargarient-circle');
let brushGradient=document.querySelector('#brushtop-gradient');
let textGradient=document.querySelector('#beautiful-homes-gradient');
let homeText=document.querySelector('#beautiful-homes-text');
let circle=document.querySelector('#circle');
let brush=document.querySelector('#brush-top');
// color scheme fucntion
function getColor(){
  // selected radio button value
  var radioSelected = document.querySelector('input[name="scheme"]:checked').value;
  //reseting all the color scheme to original color scheme
  circleGradient.classList.remove("show");
  brushGradient.classList.remove("show");
  textGradient.classList.remove("show");
  circleGradient.classList.remove("hide");
  brushGradient.classList.remove("hide");
  textGradient.classList.remove("hide");
  circle.classList.remove("multicolor");
  brush.classList.remove("multicolor-brush");
  homeText.classList.remove('shadow-text');
  //original logo
  if(radioSelected == 0 ) {
    
    circleGradient.classList.add("hide");
    brushGradient.classList.add("hide");
    textGradient.classList.add("hide");
  }
  //filter effects on logo
  else if(radioSelected == 1 ) {
    circle.classList.add("multicolor");
    brush.classList.add("multicolor-brush");
    homeText.classList.add('shadow-text');
    
   }
   //gradient effects on logo
  else { 
    circleGradient.classList.add("show");
    brushGradient.classList.add("show");
    textGradient.classList.add("show"); 
    
  }
}