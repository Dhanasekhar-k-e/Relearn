var required = 50
var total = 3
var values = [60,100,120]
var weights = [10,20,30]
var arr = []
var  ratios =[]
for(var i = 0; i < total; i++){
    arr.push([values[i]/weights[i],values[i],weights[i]])
    ratios.push(values[i]/weights[i])
}

console.log(ratios.sort((a,b)=>b-a))

var orderedArr = []

for(var i = 0; i < ratios.length; i++){

    for(var j = 0; j < arr.length; j++){
        if(ratios[i] == arr[j][0])
            orderedArr.push(arr[j])
    }
}
console.log(orderedArr)

var weight = 0
for(var i = 0; i < orderedArr.length; i++){
    if(weight <= 50){
        
    }
}