import React from 'react';
import SimpleList from './SimpleList.js'
import './app.module.css'

class App extends React.Component{
    render(){
        return (
            <div>
                <h1 className="header">Shopping List</h1>
                <SimpleList />
                <SimpleList />
                <SimpleList />
            </div>
        );
    }
}

export default App