// import React from 'react';
// import  styles from './app.module.css'
// // import styles from './simpleList.css'
// export default class SimpleList extends React.Component{
//     render(){
//         return(
//             <ol >
//                 <li className = {styles.header}>Apple</li>
//                 <li>Banana</li>
//                 <li>Watermelon</li>
//             </ol>
//         )
        
//     }
// }

// export default SimpleList

import React from 'react';
import  styles from './operatingSystems.module.css';

export default class OperatingSystems extends React.Component{
    render(){
        return(
            <div className = {styles.check}>
                <h1>Mobile Operating Systems</h1>
                <ul>
                    <li>Android</li>
                    <li>Blackberry</li>
                    <li>iPhone</li>
                    <li>Windows Phone</li>
                </ul>
            </div>
        )

    }
}