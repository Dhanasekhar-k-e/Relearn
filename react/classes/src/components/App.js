// import React from 'react';
// import SimpleList from './SimpleList.js'
// import './app.module.css'

// class App extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1 className="header">Shopping List</h1>
//                 <SimpleList />
//                 <SimpleList />
//                 <SimpleList />
//             </div>
//         );
//     }
// }

// export default App

// import React from 'react';
// // import MobileManufacturers from './mobileManufacturers.js';
// // import OperatingSystems from './operatingSystems.js';
// // var myStyle = {
// //     color: "red",
// //     padding: "10px",
// //     fontFamily: "Sans-Serif"
// //   };
// export default class App extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             favoritecolor: "red",
//             color:'red',
//             background:'pink',
//         };
  
//       }
     
  
//       componentDidMount() {
//         setTimeout(() => {
//           this.setState({
//               favoritecolor: "blue",
//               color:'blue',
//               background:'yellow'

//             })
//         //   myStyle.color = "yellow"
//         }, 1000)
//       }
//       render() {
   
//         return (
//           <h1 >My Favorite Color is <span style={{color:this.state.color, background:this.state.background}}>{this.state.favoritecolor}</span></h1>
//         );
//       }
// }



// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// export default function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);
import React from 'react';

import  './app.css'
import Garage from './Garage.js'
class App extends React.Component{
    render(){
        return (
            <div>
                <Garage/>
            </div>
        );
    }
}


export default App