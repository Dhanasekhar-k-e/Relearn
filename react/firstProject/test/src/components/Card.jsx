import React from 'react'
const skills = ['c','c++','java']
const myList = skills.map(item=><p>{item}</p>)
function Card({name, location,description,skills}) {
    return (
      <div style={{backgroundColor:"purple",width:700,height:700}}>
          <div style={{backgroundColor:"lightblue",width:400,height:500,marginLeft:150,}}>
            <p>{name}</p>
            <p>{location}</p>
            <p>{description}</p>
            {myList}
          </div>

      </div>
    );
  }
  export default Card
  