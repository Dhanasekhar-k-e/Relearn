import React from 'react'

export default class ProfileIcon extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img:this.props.image,
            title:this.props.title,
            size:this.props.size
        }
    }
    render(){
        return(
            <>
                <div style={{textAlign:"center"}}>
                    <img src={this.state.img} 
                            width={this.state.size}
                            height={this.state.size} 
                            alt="spiderman"
                            style={{borderRadius:200}}>

                    </img>
                    <p>{this.state.title}</p>
                </div>
            </>
        )
    }
}