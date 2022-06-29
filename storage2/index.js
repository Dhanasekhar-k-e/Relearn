var usersData = [
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
  
  // var data = sessionStorage.getItem()

  function login(){

    var uName = document.getElementById("name")
    var userName = uName.value
    var uPass = document.getElementById("password")
    var userPass = uPass.value
    
    
    for(var i = 0; i < usersData.length; i++){
        var bool = false
        if(userName == usersData[i].name && userPass == usersData[i].password){

            var time=new Date().toLocaleString()
            var name=userName
 
            // var data={
            //     Name:name,
            //     Time:time
            // }
            sessionStorage.setItem("loggedUser",name)
            sessionStorage.setItem("loggedTime",time)
             
            console.log(name)
            console.log(time)
            // usersLoggedList.push(JSON.parse(data))
            
            // usersData = localStorage.getItem("usersLogged")
            // localStorage.setItem("usersLogged",str)
            // var usersLoggedList = JSON.parse(usersData) || []
            // var str = JSON.stringify(usersLoggedList)
 
            bool = true
            window.location.href = "dash.html"
            console.log(userName)
            console.log(userPass)
           
            
        }
    }
    if(bool == false)
        alert("Username or Password is wrong")

  }
  var btn = document.getElementById("login")
  btn.addEventListener("click",login)