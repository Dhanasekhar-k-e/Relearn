function onLoad() {
    alert("Hello, if you are on mobile view, just scroll right to see second chat box");
  }           
  function function1(){
    var name = document.getElementById("myInput1").value
    var para = document.createElement("p");
    para.innerText = name;
    para.style.float = "right"
    para.style.color = "blue"
    para.style.height="1px"
    para.style.fontSize = "25px"
     para.style.width = "auto"
    para.style.borderRadius = "5px"
    para.style.background="lightblue"
    para.style.height="auto"
    
    var para2 = document.createElement("p")
    para2.innerHTML = name
    para2.style.float="left"  
    para2.style.color = "red"
    para2.style.fontSize = "25px"
    para2.style.width = "auto"
    para2.style.borderRadius = "5px"
    para2.style.background="lightgreen"
    para2.style.height="auto"
    
    
    var linebreak = document.createElement("br");
    var linebrk = document.createElement("br");
    
    document.getElementById("chat-area1").appendChild(linebrk);
    document.getElementById("chat-area2").appendChild(linebreak);
    
    document.getElementById("chat-area1").appendChild(para);
    document.getElementById("chat-area1").appendChild(linebrk);
    
    document.getElementById("chat-area2").appendChild(para2);
    document.getElementById("chat-area2").appendChild(linebreak);
    
    document.getElementById('myInput1').value = '';
    
    para.style.clear = "right"
    para2.style.clear = "left"
  }
  
  function function2(){
    var name = document.getElementById("myInput2").value
    var para = document.createElement("p");
    para.innerHTML = name;
    para.style.color = "red"
    para.style.height = "1px"
    para.style.float = "left"
    para.style.fontSize = "25px"
     para.style.width = "auto"
    para.style.borderRadius = "5px"
    para.style.background="lightgreen"
    para.style.height="auto"
    
    var para2 = document.createElement("p")
    para2.innerText = name;
    para2.style.color="blue"
    para2.style.height = "1px"
    para2.style.float = "right"
    para2.style.fontSize = "25px"
     para2.style.width = "auto"
    para2.style.borderRadius = "5px"
    para2.style.background="lightblue"
    para2.style.height="auto"
    var linebreak = document.createElement("br");
    var linebrk = document.createElement("br");
    
    document.getElementById("chat-area1").appendChild(linebrk);
    document.getElementById("chat-area2").appendChild(linebreak);
    
    document.getElementById("chat-area1").appendChild(para);
    document.getElementById("chat-area1").appendChild(linebrk);
    
    document.getElementById("chat-area2").appendChild(para2);
    document.getElementById("chat-area2").appendChild(linebreak);
    
    document.getElementById('myInput2').value = '';
    
    
    para.style.clear = "left"
    para2.style.clear = "right"
  }
  