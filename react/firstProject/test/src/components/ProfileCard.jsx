import React from 'react'

export default class ProfileCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img:this.props.image,
            size:this.props.size,
            name:this.props.name,
            role:this.props.role,
            exp:this.props.exp,
            dim:this.props.dim,
            bgColor:this.props.bgColor,
            radius:this.props.radius,
        }
    }
    render(){
        return(
            
                <div style={{display:"flex",flexDirection:"row",width:500,border:"1px solid black",borderRadius:20,backgroundColor:this.state.bgColor,color:'white'}}>
                    <div style={{width:this.state.size,borderRadius:this.state.radius,}}>
                        <div style={{width:300,textAlign:"center"}}>
                            <img style={{padding:10}} src={this.state.img} 
                                    width={this.state.size}
                                    height={this.state.size} 
                                    alt="spiderman"
                                    >
        
                            </img>
                            
                        </div>
                       
                    
                    </div>
                    <div>
                            <p>{this.state.name}</p>
                            <p>{this.state.role}</p>
                            <p>{this.state.exp}</p>
                    </div>
                </div>
        )
    }
}