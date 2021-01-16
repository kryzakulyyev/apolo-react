import React from "react";
import './App.css'
import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'

const bussines = {
  imageSrc: 'pizza.webp',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
  
} 
 let businesses= [bussines, bussines, bussines, bussines, bussines, bussines] 

class App extends React.Component {
  constructor (props){
    super(props)
    this.searchYelp = this.searchYelp.bind(this)
  } 
  searchYelp(term, location, sortBy){
    console.log('Searching Yelp with ' 
    + term +" "+ location + " "+ sortBy);
  

  }
  render(){
     
    return (
      <div className="App">
      <h1>Apollo Project</h1>
      <SearchBar searchYelp={this.searchYelp}  />
      <BusinessList businesses={businesses} /> 
    </div>

      );
  }
  
  
}

export default App;
