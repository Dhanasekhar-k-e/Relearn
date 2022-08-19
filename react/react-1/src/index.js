import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.js"

// const App = () =>{
//     return <h1>Hello world</h1>;
// };

// const App = function(){
//     return <h1>Hello WORLD is good at everything except</h1>
// }
//Render it to the DOM
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
