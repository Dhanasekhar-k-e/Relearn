function removeH1() {
    var data = document.querySelectorAll('h1')
    data[0].remove()
}

function removeH3() {
    var data = document.querySelectorAll('h3')
    
    for(var i = 0; i < data.length; i++)
        data[i].remove()
}

function removeH5() {
    var data = document.querySelectorAll('h5')
    
    for(var i = 0; i < data.length; i++)
        data[i].remove()
}

function removeRed() {
    var data = document.querySelectorAll('.red')
    
    for(var i = 0; i < data.length; i++)
        data[i].remove()
}

function removeDivs() {
    var data = document.querySelectorAll('#cont div')

    for(var i = 0; i < data.length; i++)
        data[i].remove()
}