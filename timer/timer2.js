
var count = 1
function timer(){
    
    const para = document.createElement("tr");
 
    para.innerText = count;
    document.getElementById("demo").appendChild(para);
    count++

    if(count == 6)
        clearInterval(stopper)    
}

var stopper = setInterval(timer,1000)