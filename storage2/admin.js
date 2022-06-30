var rawData = JSON.parse(sessionStorage.getItem("allEntries"))



for(var i = 0; i < rawData.length; i++){

    var table = document.getElementById("table_data")
    var row = document.createElement("tr")
    

    var data1 = document.createElement('td')
    var data2 = document.createElement('td')

    row.style.border="1px solid black"
    data1.style.border="1px solid black"
    data2.style.border="1px solid black"
    data1.innerText = rawData[i].name
    data2.innerText = rawData[i].time
    table.append(row,data1,data2)
}



function back() {
    window.location.href = "index.html";
  }
