import React from 'react';
import MobileOs from './MobileOs';
import MobileManufacture from './MobileManufacture'
class Mobiles extends React.Component{

   
    render(){
        return(
            <div>
                {/* <h1>My Car is {this.state.brand}</h1>
                <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>
                <button type = "button" onClick={this.changeColor}>Change Color</button> */}
                <MobileOs/>
                <MobileManufacture></MobileManufacture>
                
            </div>
        )
    }
}
export default Mobiles