
   
    var line2 = [5,4,2,4,1,1,2]
    var size = line2.length
    
    var K = 10
    var shopsArr = line2.sort((a,b)=>a-b)
    
    var sum = 0
    var i = 0
    while(sum <= K){
        sum = sum+shopsArr[i]
        i++
    }
   console.log(i-1)

