var usersData = [
    {
      name:"admin",
      password:"admin"
    },
    {
      name: "brucelee",
      password: "nevergivesup"
    },
    {
      name: "charliechaplin",
      password: "smiling"
    },
    {
      name: "wonderwoman",
      password: "inspirational"
    },
    {
      name: "thanos",
      password: "willtorule"
    }
  ]
  
  // var data = localStorage.getItem()

  function login(){

    var uName = document.getElementById("name")
    var userName = uName.value
    var uPass = document.getElementById("password")
    var userPass = uPass.value
    
    //for customers
    for(var i = 1; i < usersData.length; i++){
        var bool = false
        if(userName == usersData[i].name && userPass == usersData[i].password){

            var time=new Date().toLocaleString()
            var name=userName
            sessionStorage.setItem("loggedUser",name)
            sessionStorage.setItem("loggedTime",time)
            bool = true
            window.location.href = "dash.html"
            
        }
    }
    if(userName == usersData[0].name && userPass == usersData[0].password){
      
      bool = true
      window.location.href = "admin.html"
    }
    if(bool == false)
        alert("Username or Password is wrong")

  }
  var btn = document.getElementById("login")
  btn.addEventListener("click",login)