var values = []
function add(){
    var product = document.getElementById('product').value
    var quantity = document.getElementById('quantity').value
    var valuedata = document.getElementById('value').value
    
    var cartArray = [product,quantity,value]
    values.push(valuedata)

    var row = document.createElement('tr')
    var data1 = document.createElement('td')
    var data2 = document.createElement('td')
    var data3 = document.createElement('td')
    
    data1.innerText = product
    data2.innerText = quantity
    data3.innerText = valuedata

    var table = document.getElementById('table')
    table.append(row,data1,data2,data3)

}

