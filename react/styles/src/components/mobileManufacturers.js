import React from 'react';
import styles from './operatingSystems.module.css'

export default class MobileManufacturers extends React.Component{
    render(){
        return(
            <div id={styles.see}>
                <h1>Mobile Manufacturers</h1>
                <ul className = {[styles.check,styles.test].join(' ')} >
                    <li>Samsung</li>
                    <li>HTC</li>
                    <li>Micromax</li>
                    <li>Apple</li>
                </ul>
            </div>
        )

    }
}