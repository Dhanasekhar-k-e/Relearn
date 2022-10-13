import React from 'react'
function shoot(){
    alert("Great shot!")
}
class Football extends React.Component{
 
    render(){
        return(
            <button onClick={shoot}>Take the shot!</button>
        )
    }
}
export default Football