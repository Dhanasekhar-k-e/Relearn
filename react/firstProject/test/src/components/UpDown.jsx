import React from 'react'
let count = 0
export default class UpDown extends React.Component{
    
    constructor(){
        super()
        this.state = {
            counter:count
        }
    }
    add = ()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    substract = ()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.substract}>substract</button>
            </div>
   
        )
    }
}