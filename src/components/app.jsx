import React from 'react'
import ReactDOM from "react-dom";
import moduleName from '../assets/css/app.css'
import img from "../../src/assets/img/Download.png";

const App = () => {
  return (
     <div>
        <h1>hello World!!</h1>
        <img src={img}></img>
     </div>
  );
};

export default App