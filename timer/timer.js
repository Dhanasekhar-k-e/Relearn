var str = "Hello, this will show you a timed data repeatedly 5 times."
var names = str.split(' ')


var i = -1
var count = 0
function timer(){
    ++i
    let name = names[i]
    const para = document.createElement("td");
 
    para.innerText = name;
    document.getElementById("demo").appendChild(para);
   
    if(i == names.length-1){
        i = -1
        count++
    }

    if(count == 5)
        clearInterval(stopper)    
}

var stopper = setInterval(timer,250)