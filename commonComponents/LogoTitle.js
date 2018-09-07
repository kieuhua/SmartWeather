import React, {Component} from 'react'
import {Image, View, Text, StyleSheet } from 'react-native'

import Dimensions from "Dimensions"
import { scalingFactors } from '../styles/fonts';
let { width } = Dimensions.get("window")

class LogoTitle extends Component {
    render() {
        const name = this.props.name
        return (
            <View style={styles.row} >
                <Image source={ require('../styles/spiro.png')} style={{ width: 30, height: 30 }} />
                <Text style={styles.big}>{name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {flex: 1, flexDirection: "row", justifyContent: 'space-between'},
    big: { flex:2, fontSize: 24, fontWeight: 'bold', color: '#fff', paddingLeft: 50}
})


export default LogoTitle