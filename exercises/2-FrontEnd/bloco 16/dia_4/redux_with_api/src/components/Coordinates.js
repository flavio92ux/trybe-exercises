import React, { Component } from 'react';
import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';

class Coordinates extends Component {
  render() {
    const { latitude, longitude } = this.props;
    return (
      <section className="lat-long-section">
        <div className="lat-long">
          <img
            className="lat-long-img"
            src={ latitudeImg }
            width={ 24 }
            height={ 24 }
            alt="latitude" 
          />
          <span>{latitude}</span>
        </div>
        <div className="lat-long">
          <img
          className="lat-long-img"
          src={ longitudeImg }
          width = { 24 }
          height = { 24 }
          alt="longitude"
          />
          <span>{longitude}</span>
        </div>
      </section>
    );
  }
}

export default Coordinates;