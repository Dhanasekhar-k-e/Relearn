import React from 'react';
import Car from './Car'
class Garage extends React.Component{
    render(){
        return(
            <div>
                <h1>who lives in my Garage?</h1>
                <Car/>
            </div>
        )
    }
}
export default Garage