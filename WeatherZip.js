import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import NormalText from "./commonComponents/NormalText"

import OpenWeatherMap from "./open_weather_map"

import { fonts } from "./styles/fonts"

class WeatherZip extends Component {
    constructor(props) {
        super(props)
        this.state = { forcast: null}
    }

    _getForcast() {
        OpenWeatherMap.fetchZipForecast(this.props.zip).then(forcast => {
            this.setState({ forcast: forcast})
        })
    }

    _forcastInfo() {
        this._getForcast()
        if (this.state.forcast === null ) {
            return (
                <Text style={[this.props.style, fonts.small,]}>
                    {this.props.name} {this.props.zip} Service unavailable
                </Text>
            )
        }
        if ( this.state.forcast.main === null || this.state.forcast.temp === null ) { 
            return (
                <Text style={[this.props.style, fonts.small,]}>
                    {this.props.name} {this.props.zip} Service unavailable
                </Text>
            )
        }
        return(
            <View >
                <NormalText> {this.props.name} {this.props.zip}  {this.state.forcast.main} {this.state.forcast.temp}</NormalText>
            </View>
            
        )
    }

    render() {
        return(
            <View style={styles.row}>               
                { this._forcastInfo()}
            </View>
        )
    }
}

export default WeatherZip

const styles = StyleSheet.create({
    overlay: {backgroundColor: "rgba(0,0,0,0.1)"},
    row: {flexDirection: "row", flexWrap: "nowrap", alignItems: "center",
        justifyContent: "center", padding: 24},
    
})