var givenArr = [2,-2,0,3,4]
  
var searchNum = 3
var result = binarySearch(givenArr,0,givenArr.length-1,searchNum)

if(result == -1)
  console.log(1)
  else
  console.log(-1)
  function binarySearch(arr,k) 
  { 
      var left = 0, right = arr.length - 1; 
      while (left <= right) { 
          var mid = Math.floor((left + right) / 2)); 
        
          if (arr[mid] == k) 
              return mid; 

          if (arr[mid] < k) 
              left = mid + 1; 

          else
              right = mid - 1; 
     } 

      return -1; 
  } 
