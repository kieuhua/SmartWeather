import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, AsyncStorage, Image} from 'react-native'

import LocationButton from './LocationButton'
import OpenWeatherMap from './open_weather_map'
import Forecast from './Forecast'

// This version uses flowers.png from local assets
import PhotoBackdrop from "./PhotoBackdrop/local_image";

// This version pulls a specified photo from the camera roll
// import PhotoBackdrop from './PhotoBackdrop';

import textStyles from './styles/typography'

import SampleText from "./SampleText"
import Drawer from "./Drawer"

const STORAGE_KEY = "@SmarterWeather:zip"

/*
My current weather home page displays the last inquery either zip or current location,
it is somewhat confusing, because when you re-open the app, you don't know the dispplay
info is from old zip, it no longer in zip input, 

I think the AsyncStorage keep the last zip, and even I click current location
=> got the current location weather, but if I close the app, then open again
I got => the previous zip, which I no long display in zip.

I will change this for always display the weather of current location.

*/

class SmartWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {forecast: null}
    }
    

    componentDidMount() {
        AsyncStorage.getItem(STORAGE_KEY).then(value => {
            if (value !== null ) {
                this._getForecastForZip(value)
            }
        })
        .catch(error => console.log("AsyncStorage error: " + error.message))
        .done()
    }

    _getForecastForZip = zip => {
        // store zip code
        AsyncStorage.setItem(STORAGE_KEY, zip)
            .then(() => console.log("Saved selection to disk: " + zip))
            .catch(error => console.error("AsyncStorage error: " + error.message))
            .done()

        //alert( `kieu zip in smart_wealther, getforecast..${zip}`)   
        OpenWeatherMap.fetchZipForecast(zip).then(forecast => {
            this.setState({ forecast: forecast })
        })
    }

    _getForecastForCoords = (lat, lon) => {
       // alert( `kieu in smart_wealther, getforecast..${lat}, and ${lon}`)
        
        OpenWeatherMap.fetchLatLonForecast(lat, lon).then(forecast => {
            //alert(`forcast is ${forecast.main} and ${forecast.temp}`)
            this.setState({forecast: forecast})
        }) 
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text 
        this._getForecastForZip(zip)
    }
    render() {
        let content = null
        if (this.state.forecast !== null) {
           //alert(`the kieu forecast is ${this.state.forecast.temp}`)
            content = (
                <View style={styles.row}>
                    <Forecast main={this.state.forecast.main} temp={this.state.forecast.temp} />
                </View>
            )
        }
        return(
            <PhotoBackdrop>

                <View style={styles.overlay}>

                    <View style={styles.row}>
                        <Text style={textStyles.mainText}>
                            Forecast for
                        </Text>
                        <View style={styles.zipContainer}>
                            <TextInput style={[textStyles.mainText, styles.zipCode]}
                                onSubmitEditing={this._handleTextChange} 
                                underlineColorAndroid="transparent" />
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <LocationButton onGetCoords={this._getForecastForCoords} />
                </View>

                {content}

            </PhotoBackdrop>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {backgroundColor: "rgba(0,0,0,0.1)"},
    row: {flexDirection: "row", flexWrap: "nowrap", alignItems: "center",
        justifyContent: "center", padding: 24},
    zipContainer: {borderBottomColor: "#DDDDDD", borderBottomWidth: 1, marginLeft: 5,
        marginTop: 3, width: 80, height: textStyles.baseFontSize * 2, justifyContent: "flex-end"},
    zipCode: { flex: 1}
})

export default SmartWeather