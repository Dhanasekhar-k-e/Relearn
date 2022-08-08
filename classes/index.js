class Person{
    constructor(props){
        this.name = props.name
        this.age = props.age
    }
}

var person = new Person({name:'dhana',age:33})
console.log(person) 

function Man(props){
    this.name = props.name
    this.age = props.age
}
var man = new Man({name:"sekhar",age:33})
console.log(man)