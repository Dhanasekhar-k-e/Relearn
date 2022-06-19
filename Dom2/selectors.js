function changeH1() {
    var data = document.getElementsByTagName('h1')
    data[0].style.color = 'red'
}

function changeH3() {
    var data = document.getElementsByTagName('h3')

    for(var i = 0; i < data.length; i++){
        data[i].style.color = 'green'
    }
}

function changeH5() {
    var data = document.getElementsByTagName('h5')

    for(var i = 0; i < data.length; i++){
        data[i].style.color = 'blue'
    }
}

function changeGreen() {
    var data = document.getElementsByClassName('green')

    for(var i = 0; i < data.length; i++){
        data[i].style.color = 'green'
    }
}

function changeBlue() {
    var data = document.getElementsByClassName('blue')

    for(var i = 0; i < data.length; i++){
        data[i].style.color = 'blue'
    }
}

function changeRed() {
    var data = document.getElementsByClassName('red')

    for(var i = 0; i < data.length; i++){
        data[i].style.color = 'red'
    }
}