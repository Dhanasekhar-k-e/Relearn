import React from 'react'
const shoot=(a)=>{
    alert(a+"Great shot!")
}
class Football2 extends React.Component{
 
    render(){
        return(
            <button onClick={()=>shoot("Goal!")}>Take the shot!</button>
        )
    }
}
export default Football2