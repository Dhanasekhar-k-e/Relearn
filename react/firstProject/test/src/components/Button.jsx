import React from 'react';


function Button(props){
    var style1 = {
        background:props.background,
        width:200,
        height:30,
        borderRadius:10,
        color:'white'
    }
    return(
        <button style={style1}>{props.name}</button>
    )
    
}
export default Button