var N = 7
var soldiers = N
var soldiersPowerArr = [1,2,3,4,5,6,7]

var Q = 3
var rounds = Q
var piyushPowerArr = [3,10,2]
var killedSoldiersArr = []

for(var i = 0; i < rounds; i++){

    var piyushPower = piyushPowerArr[i]
    var powerSum = 0
    var killedSoldiers = 0


    if(piyushPower <= soldiersPowerArr[soldiersPowerArr.length-1])
        killedSoldiers = upperBound(soldiersPowerArr,piyushPower)

    if(piyushPower > soldiersPowerArr[soldiersPowerArr.length-1])
        killedSoldiers = upperBound(soldiersPowerArr,soldiersPowerArr[soldiersPowerArr.length-1])

    if(piyushPower >= soldiersPowerArr[0] && piyushPower < soldiersPowerArr[soldiersPowerArr.length-1])
        killedSoldiers = upperBound(soldiersPowerArr,piyushPower)
    if(piyushPower < soldiersPowerArr[0])
        killedSoldiers = upperBound(soldiersPowerArr,soldiersPowerArr[0])-1
    
    killedSoldiersArr.push(killedSoldiers)

    // for(var m = 0; m < killedSoldiers; m++){
    //     powerSum = powerSum +  soldiersPowerArr[m]
    // }
    
    // console.log(killedSoldiers,powerSum)
}

console.log(killedSoldiersArr)
  function upperBound(arr,k) 
  { 
      var left = 0, right = arr.length - 1; 
  
      while (left <= right) { 
          var upperBoundMid = Math.floor((left + right) / 2); 
        
          if (arr[upperBoundMid] == k && upperBoundMid != arr.length-1) 
                  left = upperBoundMid+1
          else if(arr[upperBoundMid] == k && upperBoundMid == arr.length-1)
                  return upperBoundMid+1
          else if(arr[upperBoundMid]>k && arr[upperBoundMid-1]<=k)
                  return upperBoundMid
          else if(arr[upperBoundMid] >k && arr[upperBoundMid-1] > k )
                  right = upperBoundMid-1
          else if(arr[upperBoundMid] < k)
              left = upperBoundMid+1
          else if(upperBoundMid == right)
              return upperBoundMid
      } 
  } 