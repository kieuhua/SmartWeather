import React, { Component } from "react";

import Button from "./../commonComponents/Button";
import styles from "./style.js";

const style = { backgroundColor: "#DDDDDD" };

class LocationButton extends Component {
  _onPress() {
    navigator.geolocation.getCurrentPosition(
      initialPosition => {
       // alert(initialPosition.coords.latitude)
        
        this.props.onGetCoords(
          initialPosition.coords.latitude,
          initialPosition.coords.longitude
        ); 
       // alert(initialPosition.coords.latitude)
      },
      error => {
        alert(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    //alert(`${initialPosition}`)
  }

  render() {
    return (
      <Button
        label="Use Current Location"
        style={style}
        onPress={this._onPress.bind(this)}
      />
    );
  }
}

export default LocationButton;
