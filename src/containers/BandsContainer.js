import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map(band => <li key={band.id}>{band.name}</li>);
    return(
      <div>
        <strong>BandsContainer</strong>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
};

const mapDispatchToProps = dispatch => {
  return { addBand: band => dispatch({type: 'ADD_BAND', band})};
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);


// ✓ is a child of the app component
// 7) renders a list element for each band
// 8) renders each li with the correct name
