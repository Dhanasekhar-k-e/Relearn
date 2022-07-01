var parsedData = JSON.parse(sessionStorage.getItem("allEntries")) || []

var redirect = JSON.parse(sessionStorage.getItem("redirect"))
console.log(redirect)
if(redirect == false || redirect == null)
    window.location.href = "index.html"

for(var i = 0; i < parsedData.length; i++){

    var table = document.getElementById("table_data")

    //creating row and row datas
    var row = document.createElement("tr")
    var data1 = document.createElement('td')
    var data2 = document.createElement('td')

    //styles to row
    row.style.border="1px solid black"
    data1.style.border="1px solid black"
    data2.style.border="1px solid black"

    //inserting data values
    data1.innerText = parsedData[i].name
    data2.innerText = parsedData[i].time

    //appending elements created
    table.append(row,data1,data2)
}


//filtering one time values of users
var arr = []
var userNames = []
for(var i = 0; i < parsedData.length; i++){
    userNames.push([parsedData[i].name,parsedData[i].time])
}

for(var i = 0; i < userNames.length; i++){
    arr.push(userNames[i][0])
}

arr = arr.filter((v, i, a) => a.indexOf(v) === i)


//creating options to select user names
for(var i = 0; i < arr.length; i++){
    
    var select = document.getElementById("select")
    var option = document.createElement("option")
    option.innerText = arr[i]
    select.append(option)
}

function showUserData() {

    var user = document.getElementById("select").value
    var table = document.getElementById("login_table")
    table.innerText = ""
    for(var i = 0; i < userNames.length; i++){
        if(userNames[i][0] == user){
            
            var row = document.createElement("tr")
            var data1 = document.createElement('td')
            var data2 = document.createElement('td')

            row.style.border="1px solid black"
            data1.style.border="1px solid black"
            data2.style.border="1px solid black"
        
            data1.innerText = userNames[i][0]
            data2.innerText = userNames[i][1]
        
            table.append(row,data1,data2)

        }
    }
}

redirect = false;
//logout function
function back() {
    window.location.href = "index.html";
    sessionStorage.setItem("redirect",redirect);
  }
