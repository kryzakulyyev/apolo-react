import React from "react";
import './App.css'
import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'

class App extends React.Component {
 
  render(){
     
    return (
      <div className="App">
      <h1>Apollo Project</h1>
      <SearchBar />
      <BusinessList /> 
    </div>

      );
  }
  
  
}

export default App;
