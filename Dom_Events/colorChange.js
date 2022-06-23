var changeButton = document.getElementById('changeColor');

function random(number){
  return Math.floor(Math.random()*number);
}

function switchColor(){
    var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    changeButton.style.background=randomColor
}



changeButton.addEventListener("click",switchColor)

var changeButton2 = document.getElementById("changeColor2")
var colors = ['blue','green','yellow','orange',"brown","red","purple","maroon","teal","aqua","silver","gray","fuchsia","lime","olive","navy"]
var i = 0
function switchColor2(){
  
  changeButton2.style.background=colors[i]
  i++
  if(i == colors.length-1)
    i=0
}
changeButton2.addEventListener("click",switchColor2)


var changeButton3 = document.getElementById("colorChange")
function switchColor3(){
    var randomColor = 'rgb('+random(255)+','+random(255)+','+random(255)+')'
    changeButton3.style.background=randomColor
  }
  changeButton3.addEventListener("dblclick",switchColor3)