window.onload = function(){
    document.body.style.background= "green"
    loadData("dhanasekhar-k-e")
    .then(res=>this.console.log(res))

    
    // .then(res=>this.console.log(arr))
}
var arr = []
function loadData(query){
    return fetch("https://api.github.com/search/users?q="+query)
    // .then(response=>response.json())
    // .then(response=>console.log(response))
    // .then(res=>{
    //     var data = res.json()
    //     console.log(data)
    //     return data
    // })
    // .then(res=>console.log(res))
    .then(res=>res.json())
    .then(res=>arr.push(res.items))
}