// imports
import React, { Component } from 'react';

// class
class GuestForm extends Component{
    handleChangeFor = (propertyName) => (event) => {
        this.setState({
          newGuest: {
            ...this.props.newGuest,
            [propertyName]: event.target.value,
          }
        });
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.newGuest.name) {
          this.setState({
            guestList: [...this.props.guestList, this.props.newGuest],
            newGuest: {
              name: '',
              kidsMeal: 'no',
            },
          });
        } else {
          alert('The new guest needs a name!');
        }
      }

    render(){
        return(
            <div>
            <h2>Add a new guest</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={this.props.newGuest.name}
            onChange={this.handleChangeFor('name')}
          />
          <div>
            Would this guest like a kid's meal?
            <div onChange={this.handleChangeFor('kidsMeal')}>
              <div>
                <label>
                  <input
                    type="radio"
                    value="yes"
                    name="kidsMeal"
                  />
                  Yes, this guest would like a Kid's Meal
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="no"
                    defaultChecked
                    name="kidsMeal"
                  />
                  No, this guest would not like a Kid's Meal
                </label>
              </div>
            </div>
          </div>
          <button type="submit">Add Guest</button>
        </form>
       </div>
        ) // end return
    } // end render
} // end class

// export 
export default GuestForm;
