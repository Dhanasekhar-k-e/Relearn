var givenArr = [2,-2,0,3,4]
  
var searchNum = 3
var result = binarySearch(givenArr,0,givenArr.length-1,searchNum)

if(result == -1)
  console.log(1)
  else
  console.log(-1)

function binarySearch( arr, left, right, searchElement) 
    { 
        if (right >= left) { 
            var mid = left + (right - left) / 2; 
  
            if (arr[mid] == searchElement) 
                return mid; 
  
            if (arr[mid] > searchElement) 
                return binarySearch(arr, left, mid - 1, searchElement); 
          
            return binarySearch(arr, mid + 1, right, searchElement); 
      }
        return -1; 
    } 
    
    // var givenArr = [2,-2,0,3,4]
  
    // var searchNum = 0
    // var result = binarySearch(givenArr,0,givenArr.length-1,searchNum)
  
