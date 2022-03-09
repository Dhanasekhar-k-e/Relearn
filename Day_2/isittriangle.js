
function processData(input) {
    var input = input.split("\n")

    for(var i = 1; i < input.length; i++){
        var [a,b,c] = input[i].split(' ').map(Number)
        var bool = false

        if(a+b > c && a+c > b && b+c > a)
            bool = true
        
        if(bool == true)
            console.log("Yes")
        else
            console.log("No")
    }
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
processData(`4
4 5 13
7 1 8
2 5 4
2 2 2`)