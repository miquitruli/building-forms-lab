import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  };

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>
            <p>Band Input: <input name="text" type="text" onChange={this.handleOnChange}/></p>
            <button type="submit"> Submit </button>
          </label>
        </form>
      </div>
    )
  }
}
export default BandInput

// 1) has a text input field
// 2) has an initial state with name key set to empty string
// 3) changes the local state on input change
// 4) has a prop, addBand, that is called when the form is submitted
// 5) using addBand, calls dispatch when form is submitted
