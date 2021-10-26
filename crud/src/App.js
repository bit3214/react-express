import React from "react";
import './App.css';
import aa from '../server/src/index.js'


function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
    <div className="form">
      <label>Movie Name:</label>
    <input type="text" name="movieName"/>
    <label>Review:</label>
      <input type="text" name="review"/>

      <button>Submit</button>
    </div>
    {aa.users}
    </div>
   
  );
}

export default App;
