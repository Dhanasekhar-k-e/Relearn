var userName = document.querySelector("#user");
var logTime = document.querySelector("#timeStamp");

var loggedName = sessionStorage.getItem("loggedUser");
var loggedTime = sessionStorage.getItem("loggedTime")


userName.textContent = "Logged in as "+loggedName+" at";

logTime.textContent = loggedTime;

var entry ={
        "name":loggedName,
        "time":loggedTime
    }

var existingEntries = JSON.parse(sessionStorage.getItem("allEntries"));
if(existingEntries == null) 
    existingEntries = [];

sessionStorage.setItem("entryvalues",JSON.stringify(entry))
existingEntries.push(entry);
sessionStorage.setItem("allEntries", JSON.stringify(existingEntries));
// console.log(existingEntries)


function back() {
    window.location.href = "index.html";
    // sessionStorage.clear()
  }
  var x = 1
  function timer(){
    var timer = document.getElementById("timer")
      timer.innerText = new Date().toLocaleTimeString()
  }
  
  setInterval(timer,1000)
  
  //auto log out
  setTimeout( function(){
      var timer = document.getElementById("timer")
      timer.innerText = 
      alert("logged out")
      back()
  }, 600000)



