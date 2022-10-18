import React from 'react'
// import { ReactComponent } from '*.svg';

class ChangeButton extends React.Component{
    constructor(){
        super()
        this.state = {
            text:'Dhana'
        }
    }
    handleClick = ()=>{
        this.setState({
            text:'Dhanasekhar'
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.text}</h1>
            <button onClick={this.handleClick}>Change</button>
            </>
        )
    }
}
export default ChangeButton