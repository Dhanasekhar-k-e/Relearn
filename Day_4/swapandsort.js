 var arr = [7,3,9,10]
// var arr = [11,1,9]

for(var i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1] && Math.abs(arr[i+1]-arr[i]) != 1){
        var temp = arr[i]
        arr[i] = arr[i+1]+1
        arr[i+1] = temp-1
    }
   
}

var bool = false
for(var i = 0; i < arr.length-1; i++){
    if(arr[i] <= arr[i+1])
        bool = true
    else{
        bool = false
        break
    }
}
if(bool == false)
    console.log('NO')
if(bool == true){
    console.log('YES')
    console.log(arr.join(' '))
}