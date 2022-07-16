var btn = document.getElementById('create')

btn.addEventListener('click',createCard)

function createCard(){
  var name = document.getElementById('name').value
  var mobile = document.getElementById('mobile').value
  
  var div = document.createElement('div')
  div.style.border='1px solid black'
  div.style.width = '200px'
  div.style.height = '100px'
  
  var nameDiv = document.createElement('div')
  nameDiv.innerText = name
  
  var mobileDiv = document.createElement('div')
  mobileDiv.setAttribute('id','mobile_hidden')
  mobileDiv.innerText = mobile
  mobileDiv.style.visibility = 'hidden'
  
  var visible_btn = document.createElement('button')
  visible_btn.setAttribute('id','show')
  visible_btn.innerText = 'show/hide'
  visible_btn.addEventListener('click',show_hide)
  div.append(nameDiv,mobileDiv,visible_btn)
  
  document.body.append(div)
}
var i = 0
function show_hide(event){
  var elem = document.getElementById('mobile_hidden')
  if(i%2 == 0){
    elem.style.visibility = 'visible'
    i++
  }
  else{
    elem.style.visibility = 'hidden'
    i++
  }
}
