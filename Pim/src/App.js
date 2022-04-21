import React from "react";
import './App.css'
import images from './images/images';

function App() {
    return (
        <div>
            <div className="header">
                <h1>Meet'ngo</h1>
                <img src={images.logo} className="logo"></img>
            </div>
        </div>
        
    );
}

export default App;
