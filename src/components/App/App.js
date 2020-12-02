import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import GuestList from '../GuestList/GuestList.js'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies.js'
import GuestForm from '../GuestForm/GuestForm.js'

class App extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        <GuestForm 
        newGuest={this.state.newGuest}
        handleChangeFor={this.handleChangeFor}
        handleSubmit={this.handleSubmit}
        />
        
        <h2>Party Leader</h2>
        {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
        
        <GuestList guests={this.state.guestList} />
        <DinnerSupplies count={this.state.guestList.length}/>
        
        <Footer />
        
      </div>
    );
  }
}

export default App;
