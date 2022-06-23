var changeButton = document.getElementById('changeColor');

function random(number){
  return Math.floor(Math.random()*number);
}

function switchColor(){
    var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    changeButton.style.background=randomColor
}



changeButton.addEventListener("click",switchColor)
