import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList : [
        {imageurl:'https://vignette.wikia.nocookie.net/pokemon/images/6/60/258Mudkip.png/revision/latest?cb=20140629190045',
        productName:'sandwich1',
        price:'40.42'
        },
        {imageurl:'https://vignette.wikia.nocookie.net/pokemon/images/6/60/258Mudkip.png/revision/latest?cb=20140629190045',
        productName:'sandwich2',
        price:'1.00'
        },
        {imageurl:'https://vignette.wikia.nocookie.net/pokemon/images/6/60/258Mudkip.png/revision/latest?cb=20140629190045',
        productName:'sandwich3',
        price:'3.65'
        }
      ]
    }
  }
  render() {
    
    return (
      <div>
        <Header />
        <Form />
        {/* CANT JUST DISPLAY, HAVE TO MAP THROUGH ARRAY. CODE BELOW WILL BREAK YOUR APP */}
        <Dashboard inventoryList={this.state.inventoryList}/> 
      </div>
    );
  }
}

export default App;
