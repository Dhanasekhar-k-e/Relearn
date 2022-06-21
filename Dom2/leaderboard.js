var str = ""
var res = document.getElementById("input-area")
res.value = str
var min =100000
var max = 0
function clicked0() {
var data = "0"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked1() {
var data = "1"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked2() {
var data = "2"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked3() {
var data = "3"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked4() {
var data = "4"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked5() {
var data = "5"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked6() {
var data = "6"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked7() {
var data = "7"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked8() {
var data = "8"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}
function clicked9() {
var data = "9"
str = str + data
var res = document.getElementById("input-area")
res.value = str
}

function calculate() {
var data = document.getElementById("input-area")
var num = Number(data.value)
if(num < min){
  // res.remove()
  min = num
  var res = document.createElement("p")
  res.innerText = min
  document.getElementById("min").innerText = min
}
 if(num > max){
  // res.remove()
  max = num
  var res = document.createElement("p")
  res.innerText = max
  document.getElementById("max").innerText=max
}
data.value=""
str=""

}