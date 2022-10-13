import React from 'react'
const shoot=(a,b)=>{
    alert(a+" "+b.type)
}
class Football3 extends React.Component{
 
    render(){
        return(
            <button onClick={(event)=>shoot("Goal!",event)}>Take the shot!</button>
        )
    }
}
export default Football3