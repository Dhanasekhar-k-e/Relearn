import React from 'react';
import  styles from './app.module.css'
// import styles from './simpleList.css'
export default class SimpleList extends React.Component{
    render(){
        return(
            <ol >
                <li className = {styles.header}>Apple</li>
                <li>Banana</li>
                <li>Watermelon</li>
            </ol>
        )
        
    }
}

// export default SimpleList