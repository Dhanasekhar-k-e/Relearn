var str = ""
var res = document.getElementById("input-area")
document.getElementById("max").innerText=0
res.value = str
var num = 0
var operator = ''
function clicked0() {
var data = "0"
str = str + data
res.value = str
}
function clicked1() {
var data = "1"
str = str + data
res.value = str
}
function clicked2() {
var data = "2"
str = str + data
res.value = str
}
function clicked3() {
var data = "3"
str = str + data
res.value = str
}
function clicked4() {
var data = "4"
str = str + data
res.value = str
}
function clicked5() {
var data = "5"
str = str + data
res.value = str
}
function clicked6() {
var data = "6"
str = str + data
res.value = str
}
function clicked7() {
var data = "7"
str = str + data
res.value = str
}
function clicked8() {
var data = "8"
str = str + data
res.value = str
}
function clicked9() {
var data = "9"
str = str + data
res.value = str
}

function calculate() {
  if(operator=='+'){
    var result = (num)+(Number(str))
  }
  if(operator=='-'){
    var result = (num)-(Number(str))
  }
  if(operator=='*'){
    var result = (num)*(Number(str))
  }
  if(operator=='/'){
    var result = (num)/(Number(str))
  }
document.getElementById("max").innerText=result
str=""
res.value = str
}

function clear(){
  document.getElementById("max").innerText=""
}
function add(){
 num = Number(str)
 document.getElementById("max").innerText=num
 str=""
 operator = "+"
 res.value = str
}
function sub(){
 num = Number(str)
 document.getElementById("max").innerText=num
 str=""
 operator = "-"
}
function multiply() {
 num = Number(str)
 document.getElementById("max").innerText=num
 str=""
 operator = "*"
}
function division(){
 num = Number(str)
 document.getElementById("max").innerText=num
 str=""
 operator = "/"
}