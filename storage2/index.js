var usersData = [
    {
      name:"admin",
      password:"admin"
    },
    {
      name: "january",
      password: "january"
    },
    {
      name: "february",
      password: "february"
    },
    {
      name: "march",
      password: "march"
    },
    {
      name: "april",
      password: "april"
    },
    {
      name: "may",
      password: "may"
    },
    {
      name: "june",
      password: "june"
    },
    {
      name: "july",
      password: "july"
    },
    {
      name: "august",
      password: "august"
    },
    {
      name: "september",
      password: "september"
    },
    {
      name: "october",
      password: "october"
    },
    {
      name: "november",
      password: "november"
    },
    {
      name: "december",
      password: "december"
    }
  ]

  function login(){

    var uName = document.getElementById("name")
    var userName = uName.value
    var uPass = document.getElementById("password")
    var userPass = uPass.value
    
    //for customers login
    for(var i = 1; i < usersData.length; i++){
        var bool = false
        if(userName == usersData[i].name || userName == usersData[i].name.toUpperCase() && userPass == usersData[i].password){

            var time=new Date().toLocaleString()
            var name=userName
            
            // localStorage.setItem("loggedUser",name)
            // localStorage.setItem("loggedTime",time)

            sessionStorage.setItem("loggedUser",name)
            sessionStorage.setItem("loggedTime",time)

            bool = true
            window.location.href = "dash.html"
            
        }
    }
    //for admin
    if(userName == usersData[0].name || userName == usersData[0].name.toUpperCase() && userPass == usersData[0].password){
      
      bool = true
      window.location.href = "admin.html"
    }
    //for incorrect user or password
    if(bool == false)
        alert("Username or Password is wrong")

  }
  var btn = document.getElementById("login")
  btn.addEventListener("click",login)