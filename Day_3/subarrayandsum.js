function processData(input) {
    var input = input.split('\n')
    var [n,k] = input[0].split(' ').map(Number)
    var arr = input[1].split(' ').map(Number)
    var count = 0
    var sum = 0

    var ans=[]
    ans[0]=1;
    for (var  i= 0; i < arr.length; i++){
        sum=(sum+i)%k;
        if (sum<0) sum+=k;
        count+=ans[sum];
        ans[sum]++;
     }
    console.log(count);
    
} 



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
processData(`4 3
2 3 4 6`)

// for(var i = 0; i < arr.length; i++){
        
//     for(var j = i+1; j <= arr.length; j++){
//         var subArr = arr.slice(i,j)
//         if(subArr.length == K){
//             var sum =subArr.reduce((a,b)=>a+b)
//             console.log(subArr,sum)
//             if(sum % K != 0 && sum == max )
//                 count++
//             if(sum % K != 0 && sum > max){
//                 count = 1
//             }
//         } 
//     }
    
// }
// console.log(count)
