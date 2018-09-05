import React, { Component } from "react"
import {  View, Text } from "react-native"

import WeatherZip from "../WeatherZip"

class MemberView extends Component {
    //static displayName = "MemberView"

    render() {
        return(
            <View>
                <WeatherZip name={this.props.member.data.name} zip={this.props.member.data.zip} />
           </View>
        )
    }
}

export default MemberView