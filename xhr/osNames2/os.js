var options = document.getElementById('select')
var optionsArr = []
for(var i = 1; i < options.length; i++){
    optionsArr.push(options[i].value)
}

var data = []
for(var i = 0; i < optionsArr.length; i++){
    var os = optionsArr[i]
    var str = os
    var output = callOnLoad(str)
    data[i] = output
}

var finalData = []
function saveLocal() {
    finalData = data
    console.log(finalData)
}
setTimeout(saveLocal,1500)

function callOnLoad(str){
    var result = []
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8081/codenames/'+str);
    xhr.send()
    xhr.onload = function (){
        // The HTTP 200 code is returned when your request is successful so we check for that
        if(xhr.status == 200){
            // console.log(xhr.response)// Print the response from the server after a successful request
            var arr = JSON.parse(xhr.response)
            var namesArr = arr.codenames
            // console.log(namesArr)
            // console.log(arr.os)
            for(var i = 0; i < namesArr.length; i++){
                var nameOs = namesArr[i].name
                var versionOs = namesArr[i].version
                var final = {
                    os:arr.os,
                    name:nameOs,
                    version:versionOs
                }
                result.push(final)
            }
       
        }
        else{
            console.log("Error Code is:" + xhr.status)
        }
    
    }
    return result
}



function callApi() {
    var os = document.getElementById("select").value
    var table = document.getElementById('os_data')
    table.innerText = ""
    for(var i = 0; i < finalData.length; i++){
        // console.log(namesArr[i].version,namesArr[i].name)
        var h1 = document.getElementById('os_name')
        h1.innerText = os

        for(var j = 0; j < finalData[i].length; j++){

            if(finalData[i][j].os == os){
                var row = document.createElement('tr')
        
                var versionData = document.createElement('td')
                versionData.innerText = finalData[i][j].version 
        
                var nameData = document.createElement('td')
                nameData.innerText = finalData[i][j].name
        
                document.getElementById("os_data").append(row,versionData,nameData)
            }

        }


    }
}

