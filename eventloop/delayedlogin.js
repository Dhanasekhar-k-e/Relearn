
function sleep(){
    var time = document.getElementById('time').value
    var form = document.getElementById('form')
    form.remove()
    console.log("remove")
    
    setTimeout(showData,time*1000)

    function showData(){
        var a= document.getElementById('fname').value
        var b = document.getElementById('lname').value
        var fname = document.createElement('p')
        fname.innerText = a
        var lname = document.createElement('p')
        lname.innerText = b
    
        document.body.append(fname,lname)
        console.log("hello")
    }
}


