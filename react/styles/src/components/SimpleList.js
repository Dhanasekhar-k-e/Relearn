import React from 'react';
import styles from './SimpleList.module.css';
class SimpleList extends React.Component{
    render(){
        return (
            <ol className={[styles.list,styles.border].join(" ")}>
                <li>Apple</li>
                <li>Banana</li>
                <li>Watermelon</li>
            </ol>
        );
    }
}

export default SimpleList