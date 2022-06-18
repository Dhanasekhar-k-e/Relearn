function hideClass1() {
    var elements = document.getElementsByClassName('class1')
    console.log(elements)

    for(var i = 0; i < elements.length; i++){
        var element = elements[i]
        element.textContent = ''
    }
}

function hideClass2() {
    var elements = document.getElementsByClassName('class2')
    console.log(elements)

    for(var i = 0; i < elements.length; i++){
        var element = elements[i]
        element.textContent = ''
    }
}

function removeDivsContent() {
    var elements = document.getElementsByTagName('div')
    console.log(elements)

    for(var i = 0; i < elements.length; i++){
        var element = elements[i]
        element.textContent = ''
    }
}

function removeFirstListItem() {
    var element = document.querySelector('ul li')
}