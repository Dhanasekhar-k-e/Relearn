
function callApi() {
    var os = document.getElementById("select").value
    var str = os
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8081/codenames/'+str);
    xhr.send()
    xhr.onload = function (){
        // The HTTP 200 code is returned when your request is successful so we check for that
        if(xhr.status == 200){
            console.log(xhr.response)// Print the response from the server after a successful request
            var arr = JSON.parse(xhr.response)
            var namesArr = arr.codenames
            var table = document.getElementById('os_data')
            table.innerText = ""
            for(var i = 0; i < namesArr.length; i++){
                // console.log(namesArr[i].version,namesArr[i].name)
                var h1 = document.getElementById('os_name')
                h1.innerText = str

                
                var row = document.createElement('tr')
                
                var versionData = document.createElement('td')
                versionData.innerText = namesArr[i].version 

                var nameData = document.createElement('td')
                nameData.innerText = namesArr[i].name

                document.getElementById("os_data").append(row,versionData,nameData)

            }
      
        }
        else{
            console.log("Error Code is:" + xhr.status)
        }
    
    }
}

