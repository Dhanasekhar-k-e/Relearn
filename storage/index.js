//user list
var usersData = [
    {
      name: "brucelee",
      password: "nevergivesup"
    },
    {
      name: "charliechaplin",
      password: "alwayshappy"
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


function  addUser(){
    
    var uName = document.querySelector(".name").value
    var uPass = document.querySelector(".password").value
    var bool = false
    for(var i=0;i< usersData.length;i++){
        if(uName == usersData[i].name && uPass == usersData[i].password){
          
           var time=new Date()
           var name=uName

           var data={
               Name:name,
               Time:time
           }
           sessionStorage.setItem("loggedName",name)
           sessionStorage.setItem("loggedTime",time)
            
           localStorage.setItem("AlllogedInuser",data)

           window.location.href = "dash.html";
           bool = true
            
        }  
    }
    if(bool == false)
      alert("username or password inncorrect")
  
    
}